import java.util.*;
public class originJava30 {

	public static void main(String[] args) {
		
		// Using Array to make formula : getting total and average number of students
		
		System.out.println("----Example 1----");
		int sum = 0;
		float average = 0;
		
		int [ ] score  = { 65, 35, 80, 47, 95 };
		
		for (int i = 0; i < score.length; i++)
		{
			sum += score[i];
		}
		
		average = (float)sum / score.length;  // 실수값인 float로 sum이나 score 값에 형변환 필수, 아니면 int 값인 64점으로 나와버림
		
		System.out.println(" Total = " + sum); // Total = 322 출력
		System.out.println(" Average = " + average); // Average = 64.4 출력
		
		System.out.println("-----Example 2----");
		
		int [ ] numbers = {  65, 35, 80, 47, 95 };
		
		int max = numbers [0];
		int min = numbers [0];
		
		for (int i = 0; i < numbers.length; i++) // int i 값을 두번째 배열부터 읽기 위해서 1로 변수 초기화함 
		{                                        // 실행 도중 반복문에서 계속 오류가 나서 보니 i <= numbers.lengh 가 문제였음. (이유 : numbers.length는 갯수는 총 5개임 근데 배열 갯수 상으로는 numbers [0]부터 [4] 까지이기 때문에 오류가 나는 것이었음.   
			if (max < numbers [i])
			{
			   max = numbers [i];
			}
			else if (min > numbers [i]) 
			{
			   min = numbers [i];
			}
	
		}
		System.out.println("max =" + max);  // max = 95 출력
		System.out.println("min =" + min);  // min = 35 출력 
		
	
	}
	
 }
	

