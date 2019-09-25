package com.faith.bean;

import java.util.HashSet;
import java.util.Set;

public class Manufacture {
	private int mid;
	private String name;
	private Set<Product> products=new HashSet<Product>();

	public Manufacture(int mid, String name, Set<Product> products) {
		super();
		this.mid = mid;
		this.name = name;
		this.products = products;
	}

	@Override
	public String toString() {
		return "Manufacture [mid=" + mid + ", name=" + name + ", products="
				+ products + "]";
	}

	public int getMid() {
		return mid;
	}

	public void setMid(int mid) {
		this.mid = mid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<Product> getProducts() {
		return products;
	}

	public void setProducts(Set<Product> products) {
		this.products = products;
	}

	public Manufacture() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Manufacture(String name, Set<Product> products) {
		super();
		this.name = name;
		this.products = products;
	}

	public void addProduct(Product product){
		this.products.add(product);
	}
	

}
