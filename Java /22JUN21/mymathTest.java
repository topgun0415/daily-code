public class ch06practice {
	
		public static void main (String args []) {
	

//		System.out.println(Math.ceil(3.8));   //반올림을 하는 메서드   출력값 : 4.0
//		System.out.println(Math.sqrt(4.0));  //제곱근을 구하는 메서드   출력값 : 2.0
		
		// 이처럼 메서드가 작업을 수행하는데 있어서 원하는 결과만 얻으면 될 뿐, 과정까지는 전혀 몰라도 된다. 
		// 그래서 메서드를 내부가 보이지 않는 '블랙박스'라고 한다.
		
		/*	★ 메서드를 사용하는 이유 
		 * 1. 높은 재사용성 : 이미 Java API에서 제공하는 메서드들을 사용하면서 한번 만들어놓은 메서드는 몇 번이고 호출 가능하고, 다른 프로그램에서도 사용 가능
		 * 2. 중복된 코드의 제거 : 프로그램 작성시, 같은 내용의 문장들이 여러 곳 반복되는데, 반복되는 문장을 묶어서 하나의 메서드로 작성해 놓으면 반복되는 문장 대신 메서드를 호출하는 한 문장으로 대체 가능
		 * 3. 프로그램의 구조화 : 큰 규모의 프로그램에서는 문장들을 작업단위로 나눠서 여러 개의 메서드에 담아 프로그램의 구조를 단순화 시키는것이 필수
		 */
			
			mymath mm = new mymath (); //먼저 인스턴트를 생성한다.
			long value = mm.add(2, 3); // mymath 클래스의 add메서드를 호출하여 long 타입의 참조변수 value에 대입
//		int value1 = mm.add(3, 5); // long 값으로 add메서드가 선언되었는데 int 타입으로 선언된 참조변수로 대입하려고 하니 에러가 남.
			long value2 = mm.add(4, 7); // 다시 long 값으로 설정하니 제대로 실행되는걸 확인할 수 있다.
			double value3 = mm.add(6, 2); //long과 같으 크기인 double 타입으로 해주니 제대로 실행되는걸 볼 수 있다.
				
			
			System.out.println(value);
			System.out.println(value2);
			System.out.println(value3);
			System.out.println("------------예제 6-6-----------");
			
			
			long plus = mm.add(5, 3);  // long 타입의 메서드에 이 보다 작은 int 값을 넣어도 자동으로 long으로 바뀌면서 실행되어진다.
			long minus = mm.subtract(5L, 3L);
			long times = mm.mulitiply(5L, 3L);
			double divide = mm.divide(5L, 3L);
			
			System.out.println("add(5L, 3L) = " + plus);               // 출력 = 8 
			System.out.println("subtract(5L, 3L) = " + minus);    // 출력 = 2
			System.out.println("mulitiply(5L, 3L) = " + times);     // 출력 = 15 
			System.out.println("divide(5L, 3L) = " + divide);        // 출력 = 1.666666666666667
		
	}
	
}

	class mymath {
		
		long add(long a, long b) {return a + b;} // 밑에 두 줄을 한 줄로 간단하게 만들 수 있다.
//		{ long result = a + b;
//		return result;
//		}
		long subtract (long a, long b) {return a - b;}
		long mulitiply (long a, long b) {return a * b;}
		double divide (double a, double b) {return a / b;}
	}


