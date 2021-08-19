import java.util.Arrays;

class ch06practice {

		public static void main (String args []) {
			
			ch06practice r = new ch06practice ();
			
			int result = r.add(3, 5);
			System.out.println(result);
			
			int [] resu3 = {0}; //배열을 생성하고 result2[0]의 값을 0으로 초기화
			r.add(3, 5, resu3); // 배열을 add메서드의 매개변수로 전달
			System.out.println(resu3[0]);
			
		} //메인 끝
 
		int add (int a, int b) { return a + b; }
		
		void add(int a, int b, int [] result) {result [0] = a + b;} //매개변수로 넘겨받은 배열에 연산결과를 저장
			
		
		} //클래스 끝 

// 즉 메서드의 매게변수에 인트타입의 배열을 넣었으니 이게 이름이 굳이 result가 아니어도 add메서드에 올라와있는 인트 타입 배열의 resu3을 보고도 인식을 하고 대입이 가능해진다.
