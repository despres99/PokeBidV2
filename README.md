# p2_PokeBid_FrontEnd

![img_4.png](https://github.com/220516-Java-Angular-Enterprise/P2_PokeBid_FrontEnd/blob/main/surprisedpika.png)

## PokeBid
PokeBid is an auction website where you have the chance to win otherwise hard to find **Pokemon cards**. A user is capable of both bidding on and selling items. The bidder is presented with a list of ongoing auctions and if one sparks their interest they can pin it for easy access or bid on it. Once they’ve placed their bid and the auction expires the highest bidder wins the item.

## Wireframe
![wire_frame](https://github.com/HaibunisCool/my-first-repository/blob/main/pogbid_page.PNG)

## Features
- Users can host auctions that will expire at a set date/time.
- Users can leave comments for an auction.
- Users can see what the current highest bid is
- Users can see all the items they’ve won
- Users can see all the items they’ve sold

## User Case Diagram
![img_5.png](https://github.com/HaibunisCool/my-first-repository/blob/main/user_case_d.PNG)

## MVPs 
*Back-End*
- Users will be able to create and log into their accounts.
- Listings & Sales will be tracked in a relational database.
- Users can leave a review on salers that they have bought from.
- Users will be able to list and purchase items.

*Front-End*
- Users will be able to browse through a list of on-going auctions. 
- Users will be able to navigate and participate in an on-going auction.
- Users will be able to list a Pokemon Card for auction utilizing API to fetch information about the card.


## APIs
- https://docs.pokemontcg.io
  - Core API - Library for Pokemon Trading Cards
- https://talkjs.com/docs/
  - Basic Messaging System - One-One, Group Chats, configuration options with chat rooms. 

## Stretch Goals
- Users will be notified if a (watched?) pinned auction is ending soon via notification system.
- Users can track/pin auctions they are interested in.
- Users can message each other.
- Users can upload their own image of their own card.
- Live Chat Option for ongoing Auctions.
- USPS Tracking Code will be generated by USPS Tracking API
  - Users can use tracking number to find where the card shipping is.
- Items can be linked to a product with reviews
