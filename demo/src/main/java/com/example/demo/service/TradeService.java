package com.example.demo.service;

import com.example.demo.repository.TradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entity.TradeInfo;

import java.util.List;

@Service
public class TradeService {
        @Autowired
        private TradeRepository tradeRepository;

        public List<TradeInfo> getAllUserStocks(Long user_id) {
            return tradeRepository.findByUserId(user_id);
        }

        public void setTrade(TradeInfo tradeInfo) {
            tradeRepository.save(tradeInfo);
        }
}
