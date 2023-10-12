package main

import (
	"fmt"
	"log"
	"os"
	"os/signal"
	"syscall"

	"github.com/bwmarrin/discordgo"
)

func main() {
	session, err := discordgo.New("Bot MTE1MjQ1MjQ5MjU3NjE3NDEwMQ.GbDvVH.HNccpxNqHvQ31eVLZy8Qp2aa5t3czj7QyZu1zY")

	if err != nil {
		log.Fatal(err)
	}

	session.AddHandler(func(currentSession *discordgo.Session, message *discordgo.MessageCreate) {
		if message.Author.ID == currentSession.State.User.ID {
			return
		}

		if message.Content == "hello" {
			currentSession.ChannelMessageSend(message.ChannelID, "world!")
		}
	})

	session.Identify.Intents = discordgo.IntentsAllWithoutPrivileged

	err = session.Open()
	if err != nil {
		log.Fatal(err)
	}
	defer session.Close()

	fmt.Println("the bot is online!")

	sc := make(chan os.Signal, 1)
	signal.Notify(sc, syscall.SIGINT, syscall.SIGTERM, os.Interrupt)
	<-sc
}
