
public class originJava15 {

	public static void main(String[] args) {
		
		
		// 논리연산자 
		
		/*
		 *    \\ (OR결합) : 피연산자 중 어느 한쪽이 true이면 true의 값을 얻는다.
		 *    && (AND결합) : 피연산자 중 양쪽 다 true이어야 true의 값을 얻을 수 있다. 
		 */
		
		int x = 15;
		System.out.println(x > 10 && x < 20);
		
		int i = 8;
//	    System.out.println(i%2==0 \\ i%3==0);
		
	    // 조건연산자
	    
		x = 5;
	    
		
		int a = 10;
		float b = 20.0f;
		
		System.out.println(a+b);
//	float result = b + (float)a;
//	System.out.println(b+(float)a);
  
		
		
		a = 15;
		
		a++;
		System.out.println(a);
		
		a = 15;
		++a;
		System.out.println(a);
		
		a = 5;
		int j = 3;
		
		System.out.println(a++);
		System.out.println(++j);
        System.out.println("a = " + a + " j = " + j);
		
        
        a = -5;
        a = +a;
        System.out.println(a);     // - + = -
        j = - 3;
        j = -j;
        System.out.println(j);      // - - = +
        
        byte h = 10;
        byte g = 30;
        byte k = (byte)(h * g);         // 그냥 h + g 를 했을 때는 자연스럽게 바이트 타입이 int로 형변환 되어 byte라는 작은 형한테 억지로 넣으려고 하니 에러가 난다. 그러니까 byte로 형변환을 해야한다.
        System.out.println(k);        // 답은 300이 나와야하지만 데이터의 손실로 인해서 44가 나온다.
        
        
        

	}

}
