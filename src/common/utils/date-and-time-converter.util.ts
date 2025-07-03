export class DateAndTimeConverterUtil {
    static toDate(hour: string) {
        const [hours, minutes] = hour.split(':').map(Number);

        const now = new Date();
        const dateWithTime = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            hours,
            minutes
        );

        return dateWithTime;
    }
}