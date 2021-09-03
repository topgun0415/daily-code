import java.text.*;

public class Main {
	public static void main (String [] args) {
		
		// MessageFormat은 데이터를 정해진 양식에 맞게 출력할 수 있도록 도와준다.
		
		String msg = "Name : {0} \nTel : {1} \nAge : {2} \nBirthday : {3}";
		Object [] arguments = { "이자바", "02-123-1234", "27", "07-09" }; 
		
		String result = MessageFormat.format(msg, arguments);
		System.out.println(result);
    
		}
		
	}
	

 

