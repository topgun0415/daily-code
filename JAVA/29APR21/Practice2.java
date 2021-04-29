
public class Practice2 {

	public static void main(String[] args) {
		
		
		// 30APR21 연산자에 대한 연습
		/*
		 *  =는 수학에서는 오른쪽과 왼쪽이 값이 같다라는 뜻이지만
		 *  프로그램에서는 다르다. 오른쪽값을 왼쪽에 대입한다는 의미이다.
		 *   수학에서의 =는 프로그램에서 == 이다. 
		 */
		
		int x = 10;
		int y = 20;
		
	
		
		System.out.println("x = " + x);
		System.out.println("x + y = "+ ( x + y));
		System.out.println("x - y = "+ ( x - y));
		System.out.println("x * y = "+ ( x * y));
		System.out.printf("x / y = "+ ( x / y ));
		System.out.println("\nx % y = "+ ( x % y));
		
		
		//복합 대입연산자
		
	
				
		System.out.println(" x += 10 :  " + (x += 10));
		System.out.println(" x -= 10 : " + (x -= 10));
		System.out.println(" x *=  10 : " + (x *= 10));
		System.out.println(" x %= 10 : " + (x %= 10));
		System.out.println(" x /= 10 :  " + (x /= 10));
	   
		
		//관계연산자
		 
		System.out.println(" x =! y : " + ( x !=  y ));
	  
		// 증감연산자
		/* 
		 *  ++ 1만큼 증가 
		 *  -- 1만큼 증가
		 *   
		 *   참고로 x = 10 
		 *   ++x = 11
		 *   --x = 9 
		 *   다만 이건 전임연산자에 한해서임
		 *  x-- = 10
		 *  x++ = 10 
		 *  이는 후임연산자라는 것인데 메모리에서 연산되지 않은 수를 미리 꺼내놓은것
		 *  그렇기에 그 뒤에 나오는 x의 값은 x++ = 11이 나오고 x-- = 9가 나온다. 
		 */
		
		
		//논리연산자
		boolean b1 = false;
		boolean b2 = true; 
		
		System.out.println("b1 &&  b2 : " + (b1 && b2));
		System.out.println("b1 ||  b2 : " + (b1 || b2));
		System.out.println(" !b1 : " + (!b1));
		
		
		//조건삼황 연산자
	 
		x = 10; y = 20;
		int result  =  0;
		result = ( x  >  y) ? 100 : 200; 
		System.out.println("result = " + result);
		
		result = ( x < y ) ? 100 : 200;
		System.out.println("result = " + result);
		
		result = ( x==y ) ? 100 : 200;
		System.out.println ("result  = " + result);
		
		
	}
}
