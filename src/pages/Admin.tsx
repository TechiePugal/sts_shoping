import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginWithEmail, logoutUser, auth, fetchData, addData, updateData, deleteData } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Button from '../components/ui/Button';
import { Plus, Trash2, Edit, Save, X, LogOut } from 'lucide-react';
import { Product } from '../types';

const Admin: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [products, setProducts] = useState<Record<string, Product>>({});
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formError, setFormError] = useState('');
  
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      
      if (user) {
        fetchData('products', (data) => {
          setProducts(data || {});
        });
      }
    });
    
    return () => unsubscribe();
  }, []);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    
    try {
      await loginWithEmail(loginForm.email, loginForm.password);
    } catch (error: any) {
      setLoginError('Invalid email or password');
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleProductChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (currentProduct) {
      if (name === 'features') {
        setCurrentProduct({
          ...currentProduct,
          [name]: value.split('\n').filter(feature => feature.trim() !== '')
        });
      } else {
        setCurrentProduct({
          ...currentProduct,
          [name]: value
        });
      }
    }
  };

  const resetForm = () => {
    setCurrentProduct({
      name: '',
      category: '',
      description: '',
      features: [],
      image: ''
    });
    setIsEditing(false);
    setFormError('');
  };

  const handleAddProduct = () => {
    resetForm();
    setIsEditing(true);
  };

  const handleEditProduct = (id: string, product: Product) => {
    setCurrentProduct({ ...product, id });
    setIsEditing(true);
  };

  const handleDeleteProduct = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteData('products', id);
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  const handleSubmitProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    
    if (!currentProduct) return;
    
    if (!currentProduct.name || !currentProduct.category || !currentProduct.description || !currentProduct.image) {
      setFormError('Please fill in all required fields');
      return;
    }
    
    try {
      if (currentProduct.id) {
        // Update existing product
        const { id, ...productData } = currentProduct;
        await updateData('products', id, productData);
      } else {
        // Add new product
        await addData('products', currentProduct);
      }
      resetForm();
    } catch (error) {
      console.error('Error saving product:', error);
      setFormError('An error occurred while saving the product');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0F3460] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
          <div>
            <h2 className="text-center text-3xl font-bold text-[#0F3460]">Admin Login</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Please sign in to access the admin dashboard
            </p>
          </div>
          
          {loginError && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <p className="text-red-700">{loginError}</p>
            </div>
          )}
          
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={loginForm.email}
                  onChange={handleLoginChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#0F3460] focus:border-[#0F3460] focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={loginForm.password}
                  onChange={handleLoginChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#0F3460] focus:border-[#0F3460] focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                variant="secondary"
                className="w-full"
              >
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-[#0F3460]">Admin Dashboard</h1>
          <Button
            variant="text"
            onClick={handleLogout}
            icon={<LogOut size={18} />}
          >
            Logout
          </Button>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-[#0F3460]">Products Management</h2>
            {!isEditing && (
              <Button
                variant="primary"
                size="sm"
                onClick={handleAddProduct}
                icon={<Plus size={18} />}
              >
                Add New Product
              </Button>
            )}
          </div>
          
          {isEditing ? (
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">
                  {currentProduct?.id ? 'Edit Product' : 'Add New Product'}
                </h3>
                <Button
                  variant="text"
                  size="sm"
                  onClick={resetForm}
                  icon={<X size={18} />}
                >
                  Cancel
                </Button>
              </div>
              
              {formError && (
                <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4">
                  <p className="text-red-700">{formError}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmitProduct}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Product Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={currentProduct?.name || ''}
                      onChange={handleProductChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3460]/50 focus:border-[#0F3460]"
                    />
                  </div>
                  <div>
                    <label htmlFor="category" className="block text-gray-700 font-medium mb-2">Category *</label>
                    <select
                      id="category"
                      name="category"
                      value={currentProduct?.category || ''}
                      onChange={handleProductChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3460]/50 focus:border-[#0F3460]"
                    >
                      <option value="">Select a category</option>
                      <option value="Housings and Frames">Housings and Frames</option>
                      <option value="Gears and Gearboxes">Gears and Gearboxes</option>
                      <option value="Pulleys and Rollers">Pulleys and Rollers</option>
                      <option value="Cylinder Heads">Cylinder Heads</option>
                      <option value="Brackets and Mounts">Brackets and Mounts</option>
                      <option value="Nozzles and Jets">Nozzles and Jets</option>
                      <option value="Loom Parts">Loom Parts</option>
                      <option value="Other Components">Other Components</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description *</label>
                  <textarea
                    id="description"
                    name="description"
                    value={currentProduct?.description || ''}
                    onChange={handleProductChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3460]/50 focus:border-[#0F3460]"
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="features" className="block text-gray-700 font-medium mb-2">Features (One per line)</label>
                  <textarea
                    id="features"
                    name="features"
                    value={currentProduct?.features?.join('\n') || ''}
                    onChange={handleProductChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3460]/50 focus:border-[#0F3460]"
                    placeholder="Enter features one per line"
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="image" className="block text-gray-700 font-medium mb-2">Image URL *</label>
                  <input
                    type="url"
                    id="image"
                    name="image"
                    value={currentProduct?.image || ''}
                    onChange={handleProductChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3460]/50 focus:border-[#0F3460]"
                    placeholder="https://example.com/image.jpg"
                  />
                  {currentProduct?.image && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-600 mb-2">Image Preview:</p>
                      <img 
                        src={currentProduct.image} 
                        alt="Product preview" 
                        className="h-24 w-auto object-cover rounded-md border border-gray-200"
                      />
                    </div>
                  )}
                </div>
                
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    variant="primary"
                    icon={<Save size={18} />}
                  >
                    {currentProduct?.id ? 'Update Product' : 'Add Product'}
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <>
              {Object.keys(products).length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-gray-600 mb-4">No products have been added yet.</p>
                  <Button
                    variant="primary"
                    onClick={handleAddProduct}
                    icon={<Plus size={18} />}
                  >
                    Add Your First Product
                  </Button>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Product
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Category
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Description
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {Object.entries(products).map(([id, product]) => (
                        <tr key={id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-10 w-10 flex-shrink-0">
                                <img className="h-10 w-10 rounded-full object-cover" src={product.image} alt="" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{product.name}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{product.category}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900 max-w-xs truncate">{product.description}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Button
                              variant="text"
                              size="sm"
                              className="mr-2"
                              onClick={() => handleEditProduct(id, product)}
                              icon={<Edit size={16} />}
                            >
                              Edit
                            </Button>
                            <Button
                              variant="text"
                              size="sm"
                              className="text-red-600 hover:text-red-800"
                              onClick={() => handleDeleteProduct(id)}
                              icon={<Trash2 size={16} />}
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;