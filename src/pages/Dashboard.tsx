
import { useState } from 'react';
import { FileText, Calendar, Users, TrendingUp, Activity, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import DocumentCard from '@/components/DocumentCard';
import CalendarWidget from '@/components/CalendarWidget';

const Dashboard = () => {
  const [recentDocuments] = useState([
    {
      id: '1',
      title: 'Báo cáo tháng 12/2024',
      date: '2024-12-30',
      category: 'Báo cáo',
      hasPermission: true
    },
    {
      id: '2',
      title: 'Kế hoạch Q1 2025',
      date: '2024-12-28',
      category: 'Kế hoạch',
      hasPermission: true
    },
    {
      id: '3',
      title: 'Hướng dẫn sử dụng hệ thống',
      date: '2024-12-25',
      category: 'Hướng dẫn',
      hasPermission: false
    },
    {
      id: '4',
      title: 'Biên bản họp tuần',
      date: '2024-12-23',
      category: 'Biên bản',
      hasPermission: true
    }
  ]);

  const stats = [
    {
      title: 'Tổng tài liệu',
      value: '1,234',
      change: '+12%',
      icon: FileText,
      color: 'text-vsm-green'
    },
    {
      title: 'Sự kiện tháng này',
      value: '28',
      change: '+5%',
      icon: Calendar,
      color: 'text-vsm-red'
    },
    {
      title: 'Người dùng hoạt động',
      value: '156',
      change: '+8%',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Lượt truy cập',
      value: '2,847',
      change: '+23%',
      icon: TrendingUp,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-vsm-gradient rounded-lg p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Chào mừng trở lại!</h1>
        <p className="text-white/90">
          Hôm nay là ngày tuyệt vời để quản lý tài liệu và kế hoạch của bạn.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="vsm-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> so với tháng trước
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Documents */}
        <div className="lg:col-span-2">
          <Card className="vsm-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>Tài liệu gần đây</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recentDocuments.map((doc) => (
                  <DocumentCard
                    key={doc.id}
                    title={doc.title}
                    date={doc.date}
                    category={doc.category}
                    hasPermission={doc.hasPermission}
                    onView={() => console.log('View:', doc.id)}
                    onDownload={() => console.log('Download:', doc.id)}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Calendar Widget */}
          <CalendarWidget />

          {/* Quick Actions */}
          <Card className="vsm-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5" />
                <span>Hoạt động gần đây</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-vsm-green rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Tài liệu mới được tải lên</p>
                  <p className="text-xs text-muted-foreground">2 giờ trước</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-vsm-red rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Cập nhật lịch họp</p>
                  <p className="text-xs text-muted-foreground">4 giờ trước</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Thành viên mới tham gia</p>
                  <p className="text-xs text-muted-foreground">1 ngày trước</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Storage Usage */}
          <Card className="vsm-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Dung lượng lưu trữ</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Đã sử dụng</span>
                  <span>4.2 GB / 10 GB</span>
                </div>
                <Progress value={42} className="h-2" />
              </div>
              <div className="text-xs text-muted-foreground">
                Còn lại 5.8 GB dung lượng trống
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
