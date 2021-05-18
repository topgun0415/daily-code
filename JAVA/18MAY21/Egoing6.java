
public class Egoing6 {
 public static void main(String[] args) {
	
	 // Making Auth app
	 
	 String [] users = {"Hyuub", "Yechan", "Soohyuk"};
	 String inputID = args[0];
	 
	 boolean isLogined = false;
	 for (int i = 0; i <users.length; i++) {
		 String currentID = users[i];
	     if (inputID.equals(currentID)) {
	    	 System.out.println("Hello! Welcome to my homepage");
	    	 isLogined = true;
	    	 
	    	 break;
	    	 
	     }
	     
	 }
	 System.out.println("Hi");
	 if(isLogined) {
		 System.out.println("Boss!!");
	 } else { 
		 System.out.println("Plz Try again");
			 	 
	     }
		

	 
	 
	 
	 
	 
	
	 
	 
	 
	 
	 
	 
	 
	 
	 
 }
}
