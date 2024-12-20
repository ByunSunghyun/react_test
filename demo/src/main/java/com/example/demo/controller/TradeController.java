package com.example.demo.controller;

import com.example.demo.entity.TradeInfo;
import com.example.demo.service.TradeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController


public class TradeController {

    private final TradeService tradeService;

    public TradeController(TradeService tradeService) {
        this.tradeService = tradeService;
    }

    @GetMapping("/api/getUserStockList")
    public List<TradeInfo> getAllUserStocks(@RequestParam("userId") Long userId) {
        System.out.println("getStockList");
        return tradeService.getAllUserStocks(userId);
    }

    @GetMapping("/api/setStockTrade")
    public void setStockTrade(@RequestBody TradeInfo tradeInfo) {
        tradeService.setTrade(tradeInfo);
    }
}
