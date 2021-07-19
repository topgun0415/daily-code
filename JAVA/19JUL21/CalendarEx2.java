import java.util.*;

public class Main {

	public static void main(String[] args) {
		
		final String [] DAY_OF_WEEK= { "", "일" , "월" , "화" , "수", "목", "금", "토" };
		
		Calendar Cal1= Calendar.getInstance();
		Calendar Cal2= Calendar.getInstance();
		
		//month의 경우 0 부터 시작하기 8월일 경우 7로 지정해야한다.
		// Cal1.set(2015, Calednar.AUGUST, 15);와 같이 시간을 세팅할수있다
		
		Cal1.set(2015, Calendar.AUGUST, 15);
		System.out.println("Cal1은 " + toString(Cal1) + DAY_OF_WEEK[Cal1.get(Calendar.DAY_OF_WEEK)] +"요일 이고, ");
		System.out.println("오늘은 " + toString(Cal2)+ DAY_OF_WEEK[Cal2.get(Calendar.DAY_OF_WEEK)] + "요일입니다.");
		System.out.println("");
		
		long differ = (Cal1.getTimeInMillis() - Cal2.getTimeInMillis()) / -1000 ;
		System.out.println("이 두 날짜의 초 차이는 " + differ + "초가 지났습니다."  );
		System.out.println("이 두 날짜의 일수 차이는 " + differ / (24*60*60) +  "일이 지났습니다." );
		
	}

	public static String toString(Calendar Cal) {
			return Cal.get(Calendar.YEAR) + "년" +  Cal.get(Calendar.MONTH) + "월" + Cal.get(Calendar.DATE) + "일 ";
			
		
	}
	
}

 

