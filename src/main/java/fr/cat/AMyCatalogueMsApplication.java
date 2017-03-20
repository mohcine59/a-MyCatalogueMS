package fr.cat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AMyCatalogueMsApplication {

	//ex : http://localhost:8080/produitParMC?mc=R&page=0
	
	public static void main(String[] args) {
		SpringApplication.run(AMyCatalogueMsApplication.class, args);
	}
}
