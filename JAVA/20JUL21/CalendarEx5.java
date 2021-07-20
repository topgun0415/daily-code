import java.util.*;

public class Main {

	public static void main(String[] args) {
		
			Calendar Date = Calendar.getInstance();		// 지금 시간으로 세팅이 됨
			Date.set(2015, 07, 31);	// 15년 7월 31일로 맞춤
			
			System.out.println(toString(Date));
			System.out.println("----1일 뒤 ----");
			Date.add(Calendar.DATE, +1);
			System.out.println(toString(Date));
			System.out.println("----6달 전 ----");
			Date.add(Calendar.MONTH, -6);
			System.out.println(toString(Date));
			System.out.println("----31일 후 (roll) ----");	//roll로 더한 시간 : add 메서드와 달리 그 해당 (일)필드값에서만 바뀌기 때문에 달이 넘어가도 Month 필드값에는 영향을 안주기 때문에 늘어나지 않았다.
			Date.roll(Calendar.DATE, 31);
			System.out.println(toString(Date));
			System.out.println("----31일 후 (add) ----");	//add로 더한 시간
			Date.add(Calendar.DATE, 31);
			System.out.println(toString(Date));
			
	}

	public static String toString(Calendar Cal) {
			return Cal.get(Calendar.YEAR) + "년 " +  Cal.get(Calendar.MONTH) + "월 " + Cal.get(Calendar.DATE) + "일 ";
			
	}
	
}

 

