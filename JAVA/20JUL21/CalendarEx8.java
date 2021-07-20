import java.util.Calendar;

public class Main {
	public static void main (String [] args) {
	String date1 = "201508";
	String date2 = "201405";
	
	// 년과 월을 substring 으로 잘라서 정수로 변환함
	//	년에 12를 곱해서 월로 변환한 다음에 뺄셈을 하면 개월차를 구할 수 있다.
	
	int month1 = Integer.parseInt(date1.substring(0, 4)) * 12 + Integer.parseInt(date1.substring(4));  
	int month2 = Integer.parseInt(date2.substring(0, 4)) * 12 + Integer.parseInt(date2.substring(4));

	System.out.println("2015년 8월과 2014년 5월과의 개월 수 차이 : " + Math.abs(month1-month2) + "개월 입니다.");
    
	}
	
}

 

