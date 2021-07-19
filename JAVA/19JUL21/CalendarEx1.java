import java.util.*;

public class Main {

	public static void main(String[] args) {
		
		Calendar Cal = Calendar.getInstance();	// 현재 날짜와 시간으로 세팅이 맞춰짐 
		System.out.println("이 해의 년도는 " + Cal.get(Calendar.YEAR));
		System.out.println("이 해의 월은 " + Cal.get(Calendar.MONTH));	// 0부터 계산되어져서 +1 해야함
		System.out.println("이 해의 몇 째 주 " + Cal.get(Calendar.WEEK_OF_YEAR));
		System.out.println("이 달의 몇 째 주 " + Cal.get(Calendar.WEEK_OF_MONTH));
		System.out.println();
		
		// DATE와 DAY_OF_MONTH는 같다
		System.out.println("이 달의 몇 일 " + Cal.get(Calendar.DATE));
		System.out.println("이 달의 몇 일 " + Cal.get(Calendar.DAY_OF_MONTH));
		System.out.println("이 해의 몇 일 " + Cal.get(Calendar.DAY_OF_YEAR));
		System.out.println("오늘 요일은 (1~7) , 1 = 일요일 / " + Cal.get(Calendar.DAY_OF_WEEK));
		System.out.println("오전 , 오후 (0 = 오전, 1 = 오후)  / " + Cal.get(Calendar.AM_PM));
		System.out.println("시간(0~23시간) / " + Cal.get(Calendar.HOUR_OF_DAY));
		System.out.println("시간(0~11시간) / " + Cal.get(Calendar.HOUR));
		System.out.println("분(0~59 / " + Cal.get(Calendar.MINUTE) );
		System.out.println("초(0~59 / " + Cal.get(Calendar.SECOND));
		System.out.println("1000분의 1초 (0~999" + Cal.get(Calendar.MILLISECOND));
		System.out.println();
		System.out.println("이번달의 마지막 일 " + Cal.getActualMaximum(Calendar.DATE));
		System.out.println("이번달의 첫째 날 " + Cal.getActualMinimum(Calendar.DATE));
		
	}
	
}

