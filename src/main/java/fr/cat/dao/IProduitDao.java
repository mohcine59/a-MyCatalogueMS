package fr.cat.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import fr.cat.entities.Produit;

public interface IProduitDao extends JpaRepository<Produit, Long>{
	
	@Query("select p from Produit p where p.designation like :x")
	public Page<Produit> produitParMC(@Param("x")String mc, Pageable page);
	
	
	//faire attention a la signature !!!! idem que l'attribut !!
	public List<Produit> findByDesignation(String designation);
	public Page<Produit> findByDesignation(String designation, Pageable p);
}
