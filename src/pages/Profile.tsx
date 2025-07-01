
import { useState } from 'react';
import { Camera, Mail, Phone, MapPin, Calendar, Edit, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@vsm.com',
    phone: '0123456789',
    position: 'Quản lý dự án',
    department: 'Phòng Công nghệ thông tin',
    birthday: '1990-01-15',
    address: 'Hà Nội, Việt Nam',
    bio: 'Tôi là một quản lý dự án có kinh nghiệm trong lĩnh vực công nghệ thông tin. Tôi đam mê việc phát triển hệ thống và cải thiện quy trình làm việc.',
    avatar: '/placeholder.svg'
  });

  const [editData, setEditData] = useState(profileData);

  const handleEdit = () => {
    setIsEditing(true);
    setEditData(profileData);
  };

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
    toast({
      title: "Cập nhật thành công",
      description: "Thông tin hồ sơ đã được cập nhật.",
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData(profileData);
  };

  const handleInputChange = (field: string, value: string) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAvatarChange = () => {
    // Handle avatar upload
    toast({
      title: "Tính năng đang phát triển",
      description: "Chức năng thay đổi ảnh đại diện sẽ sớm được cập nhật.",
    });
  };

  const handleRequestChange = () => {
    toast({
      title: "Yêu cầu đã được gửi",
      description: "Yêu cầu chỉnh sửa thông tin đã được gửi đến Phòng CNTT.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold">Hồ sơ cá nhân</h1>
          <p className="text-muted-foreground">
            Quản lý thông tin cá nhân của bạn
          </p>
        </div>
        
        <div className="flex space-x-2">
          {!isEditing ? (
            <>
              <Button variant="outline" onClick={handleEdit}>
                <Edit className="h-4 w-4 mr-2" />
                Chỉnh sửa
              </Button>
              <Button variant="outline" onClick={handleRequestChange}>
                <Mail className="h-4 w-4 mr-2" />
                Yêu cầu thay đổi
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" onClick={handleCancel}>
                <X className="h-4 w-4 mr-2" />
                Hủy
              </Button>
              <Button onClick={handleSave} className="vsm-button">
                <Save className="h-4 w-4 mr-2" />
                Lưu
              </Button>
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Avatar */}
        <Card className="vsm-card">
          <CardHeader>
            <CardTitle>Ảnh đại diện</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <Avatar className="w-32 h-32">
              <AvatarImage src={profileData.avatar} alt={profileData.name} />
              <AvatarFallback className="text-2xl">
                {profileData.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <Button variant="outline" onClick={handleAvatarChange}>
              <Camera className="h-4 w-4 mr-2" />
              Thay đổi ảnh
            </Button>
            
            <div className="text-center">
              <h3 className="font-semibold text-lg">{profileData.name}</h3>
              <p className="text-muted-foreground">{profileData.position}</p>
              <p className="text-sm text-muted-foreground">{profileData.department}</p>
            </div>
          </CardContent>
        </Card>

        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <Card className="vsm-card">
            <CardHeader>
              <CardTitle>Thông tin cơ bản</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Họ và tên</Label>
                  <Input
                    id="name"
                    value={isEditing ? editData.name : profileData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={isEditing ? editData.email : profileData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    disabled={true} // Email không được chỉnh sửa
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Số điện thoại</Label>
                  <Input
                    id="phone"
                    value={isEditing ? editData.phone : profileData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
                
                <div>
                  <Label htmlFor="birthday">Ngày sinh</Label>
                  <Input
                    id="birthday"
                    type="date"
                    value={isEditing ? editData.birthday : profileData.birthday}
                    onChange={(e) => handleInputChange('birthday', e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="address">Địa chỉ</Label>
                <Input
                  id="address"
                  value={isEditing ? editData.address : profileData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
            </CardContent>
          </Card>

          {/* Work Information */}
          <Card className="vsm-card">
            <CardHeader>
              <CardTitle>Thông tin công việc</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="position">Chức vụ</Label>
                  <Input
                    id="position"
                    value={isEditing ? editData.position : profileData.position}
                    onChange={(e) => handleInputChange('position', e.target.value)}
                    disabled={true} // Chức vụ cần yêu cầu thay đổi
                  />
                </div>
                
                <div>
                  <Label htmlFor="department">Phòng ban</Label>
                  <Input
                    id="department"
                    value={isEditing ? editData.department : profileData.department}
                    onChange={(e) => handleInputChange('department', e.target.value)}
                    disabled={true} // Phòng ban cần yêu cầu thay đổi
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bio */}
          <Card className="vsm-card">
            <CardHeader>
              <CardTitle>Giới thiệu</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={isEditing ? editData.bio : profileData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                disabled={!isEditing}
                rows={4}
                placeholder="Viết vài dòng giới thiệu về bản thân..."
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact Information */}
      <Card className="vsm-card">
        <CardHeader>
          <CardTitle>Thông tin liên hệ</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">{profileData.email}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Điện thoại</p>
                <p className="text-sm text-muted-foreground">{profileData.phone}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Địa chỉ</p>
                <p className="text-sm text-muted-foreground">{profileData.address}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
