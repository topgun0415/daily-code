
public class Egoingmethod1 {
	
	//Method란 n개의 비슷한 코드들을 하나로 묶어서 만드는 그룹. 매우 많은 비슷한 코드들을 효과적으로 바꿀수있음.
	 
	                                                                      //매개변수 == parameter
	public static void printTwoTimes ( String text, String delimiter ) {
		 System.out.println(delimiter);
		 System.out.println(text);
		 System.out.println(text);
	
	 }
         
	  public static void main(String[] args) {
	
	     
//		   10000000         //인자 == argument
		     printTwoTimes ("a"   ,  "*");	 
             printTwoTimes ("a"   , "*");	 
             
	            
//	 	    10000000
	         System.out.println("-");
	         System.out.println("B");
	         System.out.println("B");
	
	         
	      
	         

	   }

  }
