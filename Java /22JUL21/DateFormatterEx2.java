import java.time.*;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

public class Main {
	public static void main (String [] args) {
			
			LocalDate newyear = LocalDate.parse("2022-01-01");
			LocalDate date = LocalDate.parse("2021:07:22");
			LocalTime time = LocalTime.parse("23:32:45");		
//		LocalTime time = LocalTime.parse("23-32-45");  parse 메서드에서 시간을 : 로 하지않고 - 로 할경우 오류가 발생함. 마찬가지로 date에서도 - 대신에 :로 하면 오류발생
			LocalDateTime datetime = LocalDateTime.parse("2021-07-22T23:32:45");
			
			DateTimeFormatter pattern = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
			LocalDateTime endOfYear = LocalDateTime.parse("2021-12-31 23:59:59", pattern);
			
			System.out.println(newyear);
			System.out.println(date);
			System.out.println(time);
			System.out.println(datetime);
			System.out.println(pattern);
			System.out.println(endOfYear);
		
		}
		
	}
	


