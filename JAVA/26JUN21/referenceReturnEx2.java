import java.util.Arrays;

class Data { int x; }

public class ch06practice {

		public static void main (String args []) {
			
			Data a = new Data();
			a.x = 25;

			Data d = new Data();
			d.x = 10;
			
			Data d2 = Copy(d);   // Data d에 대한 주소를 Data d2에 입력한다
			
			
			System.out.println("d.x =" + d.x);
			System.out.println("d2.x =" + d2.x);
			System.out.println("a.x =" +a.x);
	
			
			} //메인 끝
 
		static Data Copy (Data d) {
			Data tmp = new Data ();
//			tmp.x = 7;
			tmp.x = d.x;
			
			
			return tmp;
		
			
		}

		
	} //클래스 끝
