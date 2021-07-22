import java.time.*;
import java.time.temporal.ChronoUnit;

public class Main {
	public static void main (String [] args) {
			
		// 일수 구하기 
/*		LocalDate date1 = LocalDate.of(2015,11, 25);
		LocalDate date2 = LocalDate.of(2015, 12, 21);
		
		long period = date2.toEpochDay() - date1.toEpochDay();
	System.out.println(period+ "일 차입니다.")
*/			
		
		
		LocalDate date3 = LocalDate.of(2014, 1, 1);
		LocalDate date4 = LocalDate.of(2015, 2, 1);
		
		Period pe = Period.between(date3, date4);
		
		System.out.println("date3 = " + date3);
		System.out.println("date4 = " + date4);
		System.out.println("pe = " + pe);
					
		System.out.println("YEAR = " + pe.get(ChronoUnit.YEARS));
		System.out.println("MONTH = " + pe.get(ChronoUnit.MONTHS));
		System.out.println("DAYS = " + pe.get(ChronoUnit.DAYS));
				
		LocalTime time1 = LocalTime.of(0, 0, 0);
		LocalTime time2 = LocalTime.of(12, 34,56);
		
		System.out.println("----------------");
		Duration du = Duration.between(time1, time2);
		
		System.out.println("time1 = " + time1);
		System.out.println("time2 = " + time2);
		System.out.println("duration difference = " + du);
		
		LocalTime tmptime = LocalTime.of(0, 0).plusSeconds(du.getSeconds());			// Duration 에는 getHour()와 같은 메서드가 존재하지 않으므로 LocalTime으로 형변환을 해줘야함
		
		System.out.println("HOUR = " + tmptime.getHour());
		System.out.println("MINUTE = " + tmptime.getMinute());
		System.out.println("SECEOND = " + tmptime.getSecond());
		
		}
		
	}
	


