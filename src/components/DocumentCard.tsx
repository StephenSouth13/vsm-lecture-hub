
import { FileText, Download, Eye, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface DocumentCardProps {
  title: string;
  date: string;
  category: string;
  thumbnail?: string;
  hasPermission?: boolean;
  onView?: () => void;
  onDownload?: () => void;
}

const DocumentCard = ({ 
  title, 
  date, 
  category, 
  thumbnail, 
  hasPermission = false, 
  onView, 
  onDownload 
}: DocumentCardProps) => {
  return (
    <Card className="vsm-card group cursor-pointer hover:scale-105 transition-transform duration-200">
      <CardHeader className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-primary" />
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 pt-0">
        {/* Thumbnail */}
        <div className="w-full h-32 bg-muted rounded-lg mb-3 flex items-center justify-center">
          {thumbnail ? (
            <img 
              src={thumbnail} 
              alt={title}
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <FileText className="h-12 w-12 text-muted-foreground" />
          )}
        </div>
        
        {/* Title */}
        <CardTitle className="text-sm font-medium leading-tight mb-2 line-clamp-2">
          {title}
        </CardTitle>
        
        {/* Date */}
        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
          <Calendar className="h-3 w-3" />
          <span>{date}</span>
        </div>
      </CardContent>
      
      {hasPermission && (
        <CardFooter className="p-4 pt-0">
          <div className="flex space-x-2 w-full">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1"
              onClick={onView}
            >
              <Eye className="h-3 w-3 mr-1" />
              Xem
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1"
              onClick={onDownload}
            >
              <Download className="h-3 w-3 mr-1" />
              Tải
            </Button>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default DocumentCard;
