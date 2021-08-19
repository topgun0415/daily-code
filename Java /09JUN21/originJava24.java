
public class originJava24 {

	public static void main(String[] args) {
		
		//break문 : 자신이 포함된 하나의 반복문을 벗어난다.
		
		int i = 0;
		int sum = 0;
		
		
		
		while(true) {         // for문같은 경우 for(;;)로 무한반복이 가능하지만 while 같은 경우에는 꼭 괄호안에 true를 써야한다! 
				if (sum > 100)
				break;
				
				++i;
				sum += i;
			
		}
		
		System.out.println("i = " + i);
		System.out.println("sum = " + sum);
		
		// continue문 : 자신이 포함된 반복문의 끝으로 이동 - 다음 반복으로 넘어감 전체 반복중에서 특정 조건시 반복을 건너뛸 때 유용
		
		
	   for (int a=1; a <= 10; a++) {
		   
		   if (a%3==0) //3의배수
			   continue;  // continue 문은 밑의 sysout을 무시하고 넘어감 
			   System.out.println(a);
		      
	   }

	}

}
