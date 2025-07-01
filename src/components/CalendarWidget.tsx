
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  color: string;
  isPrivate: boolean;
}

const CalendarWidget = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events] = useState<CalendarEvent[]>([
    {
      id: '1',
      title: 'Họp team dự án',
      date: '2025-01-15',
      time: '09:00',
      color: 'bg-vsm-green',
      isPrivate: false
    },
    {
      id: '2',
      title: 'Deadline báo cáo',
      date: '2025-01-20',
      time: '17:00',
      color: 'bg-vsm-red',
      isPrivate: true
    }
  ]);

  const monthNames = [
    'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
    'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
  ];

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const renderCalendarDays = () => {
    const days = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-8"></div>);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayEvents = events.filter(event => event.date === dateString);
      
      days.push(
        <div key={day} className="relative h-8 flex items-center justify-center">
          <button className="w-full h-full flex items-center justify-center text-sm hover:bg-accent rounded-sm">
            {day}
          </button>
          {dayEvents.length > 0 && (
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {dayEvents.slice(0, 2).map(event => (
                <div
                  key={event.id}
                  className={`w-1 h-1 rounded-full ${event.color}`}
                ></div>
              ))}
            </div>
          )}
        </div>
      );
    }
    
    return days;
  };

  return (
    <Card className="vsm-card">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={() => navigateMonth('prev')}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={() => navigateMonth('next')}>
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button size="sm" className="vsm-button">
              <Plus className="h-4 w-4 mr-1" />
              Thêm
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 mb-4">
          {/* Day headers */}
          {['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'].map(day => (
            <div key={day} className="h-8 flex items-center justify-center text-sm font-medium text-muted-foreground">
              {day}
            </div>
          ))}
          
          {/* Calendar days */}
          {renderCalendarDays()}
        </div>
        
        {/* Upcoming Events */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">Sự kiện sắp tới</h4>
          {events.slice(0, 3).map(event => (
            <div key={event.id} className="flex items-center space-x-3 p-2 bg-muted rounded-lg">
              <div className={`w-3 h-3 rounded-full ${event.color}`}></div>
              <div className="flex-1">
                <p className="text-sm font-medium">{event.title}</p>
                <p className="text-xs text-muted-foreground">{event.time}</p>
              </div>
              {event.isPrivate && (
                <div className="text-xs text-muted-foreground">Riêng tư</div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CalendarWidget;
