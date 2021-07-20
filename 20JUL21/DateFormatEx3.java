import java.util.*;
import java.text.*;


public class Main {
	public static void main (String [] args) {
		
		DateFormat df = new SimpleDateFormat ("yyyy년 MM월 dd일");
		DateFormat df2 = new SimpleDateFormat ("yyyy/MM/dd");
		
		try {
				Date d = df.parse("2021년 07월 20일"); 		// parse 메서드 괄호안에서 바로 문자 형변환과 동시에 안에 있는 내용을 바꿀수 있음
				System.out.println(df2.format(d));		// 사용자로부터 날짜 데이터를 문자열로 입력받을 때, 입력받은 문자열을 날짜로 인식하기 위해서는 substring메서드를 이용해서 년,월,일을 뽑아내야하는데 parse은 이러한 수고를 덜어준다.
		}
		catch (Exception e) {   }
		
	}
	
}


 

