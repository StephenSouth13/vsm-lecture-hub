
import CalendarWidget from '@/components/CalendarWidget';

const Calendar = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Lịch cá nhân</h1>
        <p className="text-muted-foreground">
          Quản lý thời gian và sự kiện của bạn
        </p>
      </div>

      {/* Calendar Widget */}
      <CalendarWidget />
    </div>
  );
};

export default Calendar;
