import players from "../players";

test("should add player", async () => {
  await players.set(["Khiz", "Test"]);
  expect(players.state.players.length).toBe(2);
});
