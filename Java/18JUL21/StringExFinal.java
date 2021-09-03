import java.util.*;

public class Main {

	public static void main(String[] args) {
		
		int iVal = 100;
		String strVal = String.valueOf(iVal);	// int 를 String 으로 바꾸는 방법 1 
		System.out.println(strVal);	
		
		double dVal2 = 100.0;
		String strVal3 = dVal2 + "";	// int 를 String 으로 바꾸는 방법 2 
		System.out.println(strVal3);
		
		double Sum = Integer.parseInt("+" + strVal) + Double.parseDouble(strVal3.trim()); // int 형으로 바꾸는 괄호 안에서 문자열을 더해도 결국에는 int 로 바뀜
		double Sum2 = Integer.parseInt(strVal) + Double.valueOf(strVal3);
		
		System.out.println(String.join("", strVal, "+", strVal3, "=" ) + Sum);
		System.out.println(strVal + "+" + strVal3 + "=" + Sum2 );
		
		int result = Integer.parseInt("A", 16);	//16진수 "A"는 10진수로는 10을 뜻한다
		System.out.println(result);
		
		String fullName = "Hello, Java";
		int index = fullName.indexOf(",");
		String index2 = fullName.substring(0, index);		// substring (in start, int end)
		String index3 = fullName.substring(index + 1, fullName.length());
		
		System.out.println("Hello,java의 확장자를 제외한 이름은 " + index2);
		System.out.println("파일 이름을 제외한 확장자의 이름은" + index3) ;
	
	}
	
}

