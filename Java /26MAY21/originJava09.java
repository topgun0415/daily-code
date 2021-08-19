import java.util.*;    //import java.util.Scanner라고 하면 자바->유틸 파일에서 스캐너 매서드만 사용이 가능. *은 그 파일에 전부 
public class originJava09 {
 public static void main(String[] args) {
	
	 
	
	 // Scanner 사용법
	 
	  Scanner scanner = new Scanner (System.in);   // Scanner 클래스의 객체를 생성
	  
	  String input = scanner.nextLine(); //입력받은 내용을 input에 저장

	  
	  //  int num = Integer.parseInt(input); //입력받은 내용을 input 타입의 값으로 변환
	  
	  int num = scanner.nextInt(); // 정수를 입력받아서 변수 num에 저장
	  float num2 = scanner.nextFloat();
	 
	  
	  
	 System.out.println("Name : " + input);
	 System.out.printf("Student Number : %d%n", num);
	 System.out.printf("GPA : %.2f%n", num2);
	 
	 
	 
	 
	 
	 
	 
	 
	  
       }
}
