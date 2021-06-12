import java.util.*;
public class originJava30 {

	public static void main(String[] args) {
		
    // 합계 
		int num;
		int sum = 0;
		boolean flag = true;
		Scanner scanner = new Scanner (System.in);
		
		System.out.println("합계를 구할 숫자를 입력하세요. (끝내려면 숫자 0을 누르세요)");
		
		while(flag) 
		{
			System.out.println("▼" );

	String tmp = scanner.nextLine();
	num = Integer.parseInt(tmp);
		
			System.out.println("→" + (num+sum));
//		int tmp = scanner.nextInt();
		
		if (num!=0)
		{
			sum += num; 	
		}	
		else 
		{
			flag = false; 
		}
		
		
		} //while문 끝
		System.out.println("합계 :" + sum);
	
     }
	
}
