
import { useState } from 'react';
import { Send, MessageSquare, Star, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';

const Feedback = () => {
  const [feedbackType, setFeedbackType] = useState('');
  const [feedbackContent, setFeedbackContent] = useState('');
  const [rating, setRating] = useState(0);

  const [feedbackHistory] = useState([
    {
      id: '1',
      type: 'bug',
      title: 'Lỗi tải tài liệu PDF',
      content: 'Không thể tải được tài liệu PDF từ trang Documents',
      status: 'resolved',
      date: '2024-12-28',
      response: 'Đã khắc phục lỗi trong phiên bản cập nhật mới nhất.'
    },
    {
      id: '2',
      type: 'feature',
      title: 'Đề xuất thêm chức năng tìm kiếm nâng cao',
      content: 'Mong muốn có thêm bộ lọc theo tác giả và ngày tạo',
      status: 'in-progress',
      date: '2024-12-25',
      response: 'Chúng tôi đang phát triển tính năng này và sẽ cập nhật trong tháng tới.'
    },
    {
      id: '3',
      type: 'improvement',
      title: 'Cải thiện giao diện mobile',
      content: 'Giao diện trên điện thoại còn một số vấn đề về responsive',
      status: 'pending',
      date: '2024-12-20',
      response: null
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!feedbackType || !feedbackContent) {
      toast({
        title: "Thông tin không đầy đủ",
        description: "Vui lòng điền đầy đủ thông tin góp ý.",
        variant: "destructive"
      });
      return;
    }

    // Submit feedback logic here
    toast({
      title: "Góp ý đã được gửi",
      description: "Cảm ơn bạn đã đóng góp ý kiến. Chúng tôi sẽ xem xét và phản hồi sớm nhất.",
    });

    // Reset form
    setFeedbackType('');
    setFeedbackContent('');
    setRating(0);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'resolved':
        return <Badge className="bg-green-100 text-green-800">Đã giải quyết</Badge>;
      case 'in-progress':
        return <Badge className="bg-yellow-100 text-yellow-800">Đang xử lý</Badge>;
      case 'pending':
        return <Badge className="bg-gray-100 text-gray-800">Chờ xử lý</Badge>;
      default:
        return <Badge variant="secondary">Không xác định</Badge>;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'bug':
        return <ThumbsDown className="h-4 w-4 text-red-500" />;
      case 'feature':
        return <Star className="h-4 w-4 text-blue-500" />;
      case 'improvement':
        return <ThumbsUp className="h-4 w-4 text-green-500" />;
      default:
        return <MessageSquare className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Góp ý & Yêu cầu chỉnh sửa</h1>
        <p className="text-muted-foreground">
          Chia sẻ ý kiến và đề xuất cải tiến hệ thống
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Feedback Form */}
        <Card className="vsm-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5" />
              <span>Gửi góp ý mới</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Feedback Type */}
              <div className="space-y-2">
                <Label htmlFor="feedback-type">Loại góp ý</Label>
                <Select value={feedbackType} onValueChange={setFeedbackType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn loại góp ý" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bug">Báo lỗi</SelectItem>
                    <SelectItem value="feature">Đề xuất tính năng</SelectItem>
                    <SelectItem value="improvement">Cải tiến</SelectItem>
                    <SelectItem value="other">Khác</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Rating */}
              <div className="space-y-2">
                <Label>Đánh giá tổng thể hệ thống</Label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`p-1 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    >
                      <Star className="h-5 w-5 fill-current" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Feedback Content */}
              <div className="space-y-2">
                <Label htmlFor="feedback-content">Nội dung góp ý</Label>
                <Textarea
                  id="feedback-content"
                  value={feedbackContent}
                  onChange={(e) => setFeedbackContent(e.target.value)}
                  placeholder="Mô tả chi tiết góp ý của bạn..."
                  rows={6}
                  required
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full vsm-button">
                <Send className="h-4 w-4 mr-2" />
                Gửi góp ý
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Feedback Statistics */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <Card className="vsm-card">
            <CardHeader>
              <CardTitle>Thống kê góp ý</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">12</p>
                  <p className="text-sm text-muted-foreground">Đã giải quyết</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-yellow-600">5</p>
                  <p className="text-sm text-muted-foreground">Đang xử lý</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-600">3</p>
                  <p className="text-sm text-muted-foreground">Chờ xử lý</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="vsm-card">
            <CardHeader>
              <CardTitle>Liên hệ trực tiếp</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-medium">Phòng Công nghệ thông tin</p>
                <p className="text-sm text-muted-foreground">Email: cntt@vsm.com</p>
                <p className="text-sm text-muted-foreground">Điện thoại: 024.3xxx.xxxx</p>
              </div>
              <div>
                <p className="font-medium">Giờ làm việc</p>
                <p className="text-sm text-muted-foreground">Thứ 2 - Thứ 6: 8:00 - 17:00</p>
                <p className="text-sm text-muted-foreground">Thứ 7: 8:00 - 12:00</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Feedback History */}
      <Card className="vsm-card">
        <CardHeader>
          <CardTitle>Lịch sử góp ý</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {feedbackHistory.map((feedback) => (
              <div key={feedback.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    {getTypeIcon(feedback.type)}
                    <h4 className="font-medium">{feedback.title}</h4>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusBadge(feedback.status)}
                    <span className="text-sm text-muted-foreground">{feedback.date}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">{feedback.content}</p>
                
                {feedback.response && (
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-sm font-medium mb-1">Phản hồi từ Phòng CNTT:</p>
                    <p className="text-sm">{feedback.response}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Feedback;
