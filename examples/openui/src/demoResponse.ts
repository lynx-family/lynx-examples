export const TRAVEL_PLAN_RESPONSE = `
root = Stack([intro, plan, actions], "column", false, "l", "stretch", "start")
intro = Stack([label, title, subtitle], "column", false, "s", "stretch", "start")
label = Tag("OPENUI TRAVEL ASSISTANT")
title = TextContent("A slow weekend in Shanghai", "large-heavy")
subtitle = TextContent("A two-day plan generated from a compact OpenUI Lang response.")
plan = Card([planHeader, dayOne, divider, dayTwo], "card", "column", false, "m", "stretch", "start")
planHeader = CardHeader("Your itinerary", "2 days · food, architecture, and riverside walks")
dayOne = Stack([dayOneTitle, dayOneMorning, dayOneEvening], "column", false, "xs", "stretch", "start")
dayOneTitle = TextContent("Day 1 · Old Shanghai", "small-heavy")
dayOneMorning = TextContent("Morning — Walk from Wukang Road to the former French Concession.")
dayOneEvening = TextContent("Evening — Try local dishes, then see the Bund after sunset.")
divider = Separator()
dayTwo = Stack([dayTwoTitle, dayTwoMorning, dayTwoEvening], "column", false, "xs", "stretch", "start")
dayTwoTitle = TextContent("Day 2 · Art and the river", "small-heavy")
dayTwoMorning = TextContent("Morning — Explore the West Bund museums and riverside park.")
dayTwoEvening = TextContent("Afternoon — Cross to Pudong for a skyline view from Lujiazui.")
actions = Buttons([
  Button("Ask for alternatives", Action([@ToAssistant("Show me a rain-friendly version of this plan")]), "secondary"),
  Button("Use this plan", Action([@ToAssistant("Use this Shanghai weekend plan")]), "primary")
])
`.trim();
