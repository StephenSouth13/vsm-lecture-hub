
import { useState } from 'react';
import { Search, Filter, Grid, List, Plus, SortDesc } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DocumentCard from '@/components/DocumentCard';

const Documents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const [documents] = useState([
    {
      id: '1',
      title: 'Báo cáo tài chính Q4 2024',
      date: '2024-12-30',
      category: 'Báo cáo',
      author: 'Nguyễn Văn A',
      hasPermission: true,
      thumbnail: '/placeholder.svg'
    },
    {
      id: '2',
      title: 'Kế hoạch marketing 2025',
      date: '2024-12-28',
      category: 'Kế hoạch',
      author: 'Trần Thị B',
      hasPermission: true,
      thumbnail: '/placeholder.svg'
    },
    {
      id: '3',
      title: 'Hướng dẫn sử dụng hệ thống VSM',
      date: '2024-12-25',
      category: 'Hướng dẫn',
      author: 'Lê Văn C',
      hasPermission: false,
      thumbnail: '/placeholder.svg'
    },
    {
      id: '4',
      title: 'Biên bản họp tuần 52/2024',
      date: '2024-12-23',
      category: 'Biên bản',
      author: 'Phạm Thị D',
      hasPermission: true,
      thumbnail: '/placeholder.svg'
    },
    {
      id: '5',
      title: 'Đề xuất cải tiến quy trình',
      date: '2024-12-20',
      category: 'Đề xuất',
      author: 'Hoàng Văn E',
      hasPermission: true,
      thumbnail: '/placeholder.svg'
    },
    {
      id: '6',
      title: 'Báo cáo hiệu suất tháng 12',
      date: '2024-12-18',
      category: 'Báo cáo',
      author: 'Vũ Thị F',
      hasPermission: false,
      thumbnail: '/placeholder.svg'
    },
    {
      id: '7',
      title: 'Tài liệu đào tạo nhân viên mới',
      date: '2024-12-15',
      category: 'Đào tạo',
      author: 'Đặng Văn G',
      hasPermission: true,
      thumbnail: '/placeholder.svg'
    },
    {
      id: '8',
      title: 'Chính sách bảo mật thông tin',
      date: '2024-12-12',
      category: 'Chính sách',
      author: 'Bùi Thị H',
      hasPermission: true,
      thumbnail: '/placeholder.svg'
    }
  ]);

  const categories = [
    { value: 'all', label: 'Tất cả' },
    { value: 'Báo cáo', label: 'Báo cáo' },
    { value: 'Kế hoạch', label: 'Kế hoạch' },
    { value: 'Hướng dẫn', label: 'Hướng dẫn' },
    { value: 'Biên bản', label: 'Biên bản' },
    { value: 'Đề xuất', label: 'Đề xuất' },
    { value: 'Đào tạo', label: 'Đào tạo' },
    { value: 'Chính sách', label: 'Chính sách' }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleView = (docId: string) => {
    console.log('Viewing document:', docId);
    // Navigate to document viewer
  };

  const handleDownload = (docId: string) => {
    console.log('Downloading document:', docId);
    // Handle download
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Tài liệu</h1>
          <p className="text-muted-foreground">
            Quản lý và truy cập tài liệu của tổ chức
          </p>
        </div>
        <Button className="vsm-button">
          <Plus className="h-4 w-4 mr-2" />
          Thêm tài liệu
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Tìm kiếm tài liệu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Category Filter */}
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full lg:w-48">
            <SelectValue placeholder="Chọn danh mục" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(category => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Sort */}
        <Select defaultValue="newest">
          <SelectTrigger className="w-full lg:w-48">
            <SelectValue placeholder="Sắp xếp" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Mới nhất</SelectItem>
            <SelectItem value="oldest">Cũ nhất</SelectItem>
            <SelectItem value="name">Tên A-Z</SelectItem>
            <SelectItem value="category">Danh mục</SelectItem>
          </SelectContent>
        </Select>

        {/* View Mode */}
        <div className="flex border rounded-lg">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('grid')}
            className="rounded-r-none"
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('list')}
            className="rounded-l-none"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Hiển thị {filteredDocuments.length} trong tổng số {documents.length} tài liệu
        </p>
      </div>

      {/* Documents Grid/List */}
      <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as 'grid' | 'list')}>
        <TabsContent value="grid">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDocuments.map((doc) => (
              <DocumentCard
                key={doc.id}
                title={doc.title}
                date={doc.date}
                category={doc.category}
                thumbnail={doc.thumbnail}
                hasPermission={doc.hasPermission}
                onView={() => handleView(doc.id)}
                onDownload={() => handleDownload(doc.id)}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="list">
          <div className="space-y-2">
            {filteredDocuments.map((doc) => (
              <div key={doc.id} className="vsm-card p-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-xs font-medium">{doc.category.slice(0, 2)}</span>
                  </div>
                  <div>
                    <h3 className="font-medium">{doc.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {doc.author} • {doc.date}
                    </p>
                  </div>
                </div>
                
                {doc.hasPermission && (
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={() => handleView(doc.id)}>
                      Xem
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleDownload(doc.id)}>
                      Tải về
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Empty State */}
      {filteredDocuments.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium mb-2">Không tìm thấy tài liệu</h3>
          <p className="text-muted-foreground">
            Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc
          </p>
        </div>
      )}
    </div>
  );
};

export default Documents;
