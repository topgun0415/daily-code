
public class originJava12 {

	public static void main(String[] args) {
		
          // 연산자 (Operator) 
		
		int x = 5;
		System.out.println(4*x+3);
		
	    // 연산자의 우선순위
		
		System.out.println(4*x+3); //이의 식은 사칙연산의 우선순위를 따라 자동으로 곱셈이 먼저 실행되도록 만들어진 식이다.
		System.out.println(4*(x+3)); //먼저 계산을 하게 만들고 싶은 값을 괄호로 묶어주면된다.
		
		// 증감연산자 
		
		int i = 5, j = 0;
		
		j = i++;
		System.out.println("j = i++; 실행 후 i = " +  i  +  "  j = " + j );
		
		i = 5; 
		j = 0;
		
		j = ++i; 
		System.out.println("j = ++i; 실행 후 i = " +  i  +  "  j = " + j );
		
	
		
		int a = 10;
		int b = 4;
		System.out.println(a/b); 
		
		float c = 10;
		float d = 4;
		System.out.println((float)a/(float)b);  
	   
		// 같은 형의 타입만 사칙연산이 가능함 , integer 에서 float로 형변환 하는 방법도 있음.
		
		
		System.out.println('2'-'0'); // Char 와 byte와 같은 작은 정수형은 integer로 바뀐다. 즉 Char 타입의 '2'와 '0'은 유니코드로 바꾸면 50과 48이 된다.
	    //앞 장에서 문자형에서 숫자(integer)로 바꾸려면 -'0'을 하면 된다고 했는데 이는 위와같이 Char 타입에서 사칙연산이 들어가면 자연스럽게 유니코드로 바뀌어서 계산하게 되므로 어떤 문자든 '0'을 빼주면 숫자로 바뀌게된다.                              
		
		
		
		
	
		
		
		
		
		
	}

}
