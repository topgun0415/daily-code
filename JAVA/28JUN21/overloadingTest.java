public class overloadingTest {
	  	
		public static void main (String args []) {
	
			// 오버로딩 = 한 클래스 안에 같은 이름의 메서드 여러 개 정의하는 것
			
			/* 오버로딩의 조건
			 * 
			 *  1. 메서드의 이름이 같아야 한다.
			 *  2. 매개변수의 개수 또는 타입이 달라야한다.
			 *  3. 반환 타입은 영향없다.
			 */
			
			// println 메서드가 좋은 예시
			/* System.out.println()에는 매개변수로 
			 *  System.out.println(boolean)
			 *  System.out.println(int)
			 *  System.out.println(long)
			 *  System.out.println(String)
			 */ 
			
			System.out.println(1+2);
			System.out.println("Hello world!");
			System.out.println(true);
			System.out.println();
				
			
			MyMath3 mm = new MyMath3 ();
			System.out.println("mm.add(3,3) = " + mm.add(3, 3));
			System.out.println("mm.add(3,3L) = " + mm.add(3, 3L));
			System.out.println("mm.add(3L,3) = " + mm.add(3L, 3));
			System.out.println("mm.add(3L,3L) = " + mm.add(3L, 3L));
			
			int [] a = {100, 200, 300 };
			System.out.println("mm.add(a) = " + mm.add(a));
			System.out.println();
			
			
		 } 
	
  }
		class MyMath3 {
			
			int add (int a, int b) { 
			System.out.print ("int add(int a, int b) - ");
			return a + b;
			}
			
			long add (int a, long b) {
				System.out.print("long add(int a, long b) - ");
				return a + b;
			}
			
			long add (long a, int b) {
				System.out.print("long add(long a, int b) - ");
				return a + b;
				
			}
			
			long add (long a, long b) {
				System.out.print("long add(long a, long b) - ");
				return a + b;
				
			}
			
			int add(int[] a) {
				System.out.print("int add(int[] a) - " );
				int result = 0 ;
				for (int i = 0; i < a.length; i++) {
				result += a[i]; 
				}	
				return result;
				
			}
			
	}
  
  
  
