using Microsoft.EntityFrameworkCore.Migrations;

namespace KozmetickiSalon_back.Migrations
{
    public partial class V24 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Zaposleni_Smena_SmenaID",
                table: "Zaposleni");

            migrationBuilder.DropIndex(
                name: "IX_Zaposleni_SmenaID",
                table: "Zaposleni");

            migrationBuilder.DropColumn(
                name: "SmenaID",
                table: "Zaposleni");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "SmenaID",
                table: "Zaposleni",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Zaposleni_SmenaID",
                table: "Zaposleni",
                column: "SmenaID");

            migrationBuilder.AddForeignKey(
                name: "FK_Zaposleni_Smena_SmenaID",
                table: "Zaposleni",
                column: "SmenaID",
                principalTable: "Smena",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
