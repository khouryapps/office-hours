describe("Edit Queue Notes", () => {
  it("can successfully edit queue notes as a ta", () => {
    cy.server();
    /*cy.request("http://localhost:3000/api/v1/profile").then((response) => {
      cy.writeFile("cypress/fixtures/test_profile.json", response.body);
    });*/
    cy.route("GET", "/api/v1/profile", "fixture:student_profile");
    cy.route("GET", "/api/v1/courses/1", "fixture:queue_routes_no_notes");
    cy.route("PATCH", "/api/v1/queues/1", {});

    cy.visit("/course/1/today");
    cy.get("svg[data-icon='edit']").click();

    cy.route(
      "GET",
      "/api/v1/courses/1/queues",
      "fixture:queue_route_with_notes"
    );

    cy.get("input").click().type("alex has a smooth brain{enter}");

    cy.get("p").contains("alex has a smooth brain");
  });
});