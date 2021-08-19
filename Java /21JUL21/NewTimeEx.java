import java.time.*;
import java.time.temporal.ChronoUnit;

public class Main {
	public static void main (String [] args) {
			
			LocalDate today = LocalDate.now();	// 오늘의 날짜s	
			LocalTime now = LocalTime.now();		// 현재 시간 
			LocalDateTime todaynow = LocalDateTime.now();
			
			
			LocalDate birthDate = LocalDate.of(1992, 04, 15);
			LocalTime birthTime = LocalTime.of(22, 15);
			
			System.out.println("오늘의 날짜" + today);
			System.out.println("현재 시간" + now);
			System.out.println("오늘 날짜와 시간 =" + todaynow);
			System.out.println("태어난 날짜" + birthDate);
			System.out.println("태어난 시간" + birthTime);
			
			
			System.out.println(birthDate.withYear(1993));
			System.out.println(birthDate.plusDays(1));	// plus 메서드를 써도 with 메서드가 중첩이 되지 않음 
			System.out.println(birthDate.plus(3, ChronoUnit.DAYS));		// 위에있는 plusDays() 와 같음 ( 마찬가지로 저장되어있는 값에서 +3 추가)
			
			System.out.println(birthTime.truncatedTo(ChronoUnit.HOURS)); 		// 시를 제외한 나머지를 0으로 만들어줌
			System.out.println(now.truncatedTo(ChronoUnit.HOURS));
			
		}
		
	}
