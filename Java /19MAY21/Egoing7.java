
public class Egoing7 {
  public static void main(String[] args) {

// Making Auth app 2 (Plus password)
	 
//	 String [] users = {"Hyuub", "Yechan", "Soohyuk"};
	 String [] [] users = {
			 {"Hyuub", "1111"},
			 {"Yechan",  "2222"},
			 {"Soohyuk", "3333"}
		 };
			 
	 String inputID = args[0];
	 String inputPW = args[1]; 
	 
	 
	 boolean isLogined = false;
	 for (int i = 0; i <users.length; i++) {
		 String [] current  = users[i];
	     if (current[0].equals(inputID) &&
	    	  current[1].equals(inputPW))
	     
	        {System.out.println("Hello! Welcome to my homepage");
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
