
public class Egoing3 {
 public static void main(String[] args) {
	
	 /*    Primitive  : boolean , int , double , short , long , float , char 와 같은 원시적인 즉 더 이상 깨질 수 없는 언어
	  *     Non Primitive : String , Array , Date , File 는 위와 반대되는 언어 
	  *     
	  *     원시 언어에서는 == 동등 연산자로 사용 가능하지만 비원시 언어는 ( ).equals( ) 를 사용해서 해야함. 
	  *     
	  * 
	  * 
	  * 
	  * 
	  * 
	  * 
	  * 
	  * 
	  */
	 
	 String o1 = new String ("Java");    // new가 붙으면 아예 새로운 메모리에 Java라는걸 넣는 것 (객체화) 
	 String o2 = new String ("Java");
	 
	 String q1 = "java";
	 String q2 = "java";
	 
	 int p1 = 1;
	 int p2 = 1;
	 
	 if (p1 == p2) {
		 System.out.println("yes");
	 }
	 if (o1.equals(o2)){
		 System.out.println("yes");
	 }
	 if (p1 == p2) {
		 System.out.println("yes");
	 }
	 
	 
	 
	 
	 

	 
	
	 
	 
	 
	 
	 
 }
}
