package fr.cat.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import fr.cat.dao.IProduitDao;
import fr.cat.entities.Produit;

@RestController
public class CatalogueCtrl {

	@Autowired
	private IProduitDao produitDao;
	
	@RequestMapping("/test")
	public String test(){
		return "test";
	}
	
	@RequestMapping(value="/save", method=RequestMethod.POST)
	public Produit saveProduit(@RequestBody Produit p){
		return produitDao.save(p);
	}
	
	@RequestMapping("/all")
	public List<Produit> getProduits(){
		return produitDao.findAll();
	}
	
	@RequestMapping("/produits")
	public Page<Produit> getProduits(int page){
		return produitDao.findAll(new PageRequest(page, 5));
	}
	
	//On définit le @RequestParam si le nom du param est different que celui definit dans l'url
	@RequestMapping(value = "/produitParMC")
	public Page<Produit> index(Model model, 
			@RequestParam(name="page", defaultValue="0") String page, 
			@RequestParam(name="nb", defaultValue="5") int size, 
			@RequestParam(name="mc", defaultValue="") String mc) {
		
		//Page<Produit> pageProduits = produitRepository.findAll(new PageRequest(page, size));
		Page<Produit> pageProduits = produitDao.produitParMC("%"+mc+"%", new PageRequest(Integer.parseInt(page), size));

		return pageProduits;
	}
	
	@RequestMapping("/produit")
	public Produit getProduit(Long ref){
		return produitDao.findOne(ref);
	}
	
	@RequestMapping(value="/delete/{ref}",method = RequestMethod.DELETE)
	public boolean delete(@PathVariable long ref){
		produitDao.delete(ref);
		return true;
	}
	
	@RequestMapping(value="/update",  method=RequestMethod.PUT)
	@ResponseBody
	public Produit update(@RequestBody final Produit p){
		return produitDao.saveAndFlush(p);
	}
}
