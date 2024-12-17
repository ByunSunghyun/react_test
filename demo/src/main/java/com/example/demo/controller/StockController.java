package com.example.demo.controller;

import com.example.demo.entity.Stock;
import com.example.demo.service.StockService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StockController {

    private final StockService stockService;

    public StockController(StockService stockService) {
        this.stockService = stockService;
    }

    @GetMapping("/api/getStockList")
    public List<Stock> getAllStocks() {
        System.out.println("getStockList");
        return stockService.findAllStocks();
    }

    @GetMapping("/api/getCompanyName")
    public String getCompanyName(@RequestParam String symbol) {
        Stock stock = stockService.findBySymbol(symbol);
        if (stock != null) {
            return stock.getCompanyName();
        } else {
            return "Symbol not found";
        }
    }
}