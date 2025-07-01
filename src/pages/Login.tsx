
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-background to-muted">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-vsm-gradient rounded-2xl mb-4">
              <span className="text-white text-2xl font-bold">VSM</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground">
              Hệ thống Lưu trữ Bài giảng
            </h1>
            <p className="text-muted-foreground mt-2">
              Vietnam Student Marathon
            </p>
          </div>

          {/* Login Form */}
          <Card className="vsm-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Đăng nhập</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Input */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Nhập email của bạn"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <Label htmlFor="password">Mật khẩu</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Nhập mật khẩu"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full vsm-button" 
                  disabled={isLoading}
                >
                  {isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right Side - VSM Branding */}
      <div className="hidden lg:flex flex-1 items-center justify-center p-8 bg-vsm-gradient">
        <div className="text-center text-white">
          <div className="mb-8">
            <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <span className="text-6xl font-bold">VSM</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Vietnam Student Marathon
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Hệ thống quản lý tài liệu chuyên nghiệp
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-semibold mb-2">Quản lý tài liệu</h3>
              <p className="text-sm opacity-80">Lưu trữ và tổ chức tài liệu hiệu quả</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-semibold mb-2">Lịch cá nhân</h3>
              <p className="text-sm opacity-80">Quản lý thời gian và sự kiện</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-semibold mb-2">Giao diện thân thiện</h3>
              <p className="text-sm opacity-80">Thiết kế hiện đại, dễ sử dụng</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-semibold mb-2">Bảo mật cao</h3>
              <p className="text-sm opacity-80">Đảm bảo an toàn thông tin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
