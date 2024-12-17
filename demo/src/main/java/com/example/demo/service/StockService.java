package com.example.demo.service;

import com.example.demo.entity.Stock;
import com.example.demo.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockService {

    @Autowired
    private StockRepository stockRepository;

    public Stock findBySymbol(String symbol) {
        return stockRepository.findBySymbol(symbol);
    }

    public List<Stock> findAllStocks() {
        return stockRepository.findAll();
    }
}