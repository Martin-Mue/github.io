document.addEventListener('DOMContentLoaded', function() {
    const pascalCode = `program Danke;

type
  TDozent = record
    Name: string;
    BeziehungsIndex: Integer;
    HumorLevel: Integer;
    PascalKompetenz: Integer;
    Menschlichkeit: Integer;
  end;

function BewerteBeziehung(index: Integer): string;
begin
  case index of
    10: BewerteBeziehung := 'Legendär';
    8..9: BewerteBeziehung := 'Hervorragend';
    6..7: BewerteBeziehung := 'Sehr gut';
    else BewerteBeziehung := 'Gut';
  end;
end;

function BewerteHumor(level: Integer): string;
begin
  case level of
    10: BewerteHumor := 'Comedygenie';
    8..9: BewerteHumor := 'Lachgarantie';
    6..7: BewerteHumor := 'Stimmungsaufheller';
    else BewerteHumor := 'Schmunzeln garantiert';
  end;
end;

function BewerteMenschlichkeit(level: Integer): string;
begin
  case level of
    10: BewerteMenschlichkeit := 'Vorbildlich menschlich';
    8..9: BewerteMenschlichkeit := 'Außergewöhnlich empathisch';
    6..7: BewerteMenschlichkeit := 'Sehr mitfühlend';
    else BewerteMenschlichkeit := 'Menschlich';
  end;
end;

function BerechneLerneffekt(beziehung, humor, menschlichkeit: Integer): Integer;
begin
  BerechneLerneffekt := Round((beziehung + humor + menschlichkeit) / 3 * 10);
end;

function Erstelle_Abschiedsgruß(dozent: TDozent): string;
var
  beziehungsBewertung, humorBewertung, menschlichkeitsBewertung: string;
  lerneffekt: Integer;
begin
  beziehungsBewertung := BewerteBeziehung(dozent.BeziehungsIndex);
  humorBewertung := BewerteHumor(dozent.HumorLevel);
  menschlichkeitsBewertung := BewerteMenschlichkeit(dozent.Menschlichkeit);
  lerneffekt := BerechneLerneffekt(dozent.BeziehungsIndex, dozent.HumorLevel, dozent.Menschlichkeit);

  Erstelle_Abschiedsgruß := 
    'Herzliches Dankeschön, ' + dozent.Name + '!' + #13#10 +
    'Beziehungsarbeit: ' + beziehungsBewertung + #13#10 +
    'Humor-Level: ' + humorBewertung + #13#10 +
    'Menschlichkeit: ' + menschlichkeitsBewertung + #13#10 +
    'PASCAL-Kompetenz: ' + IntToStr(dozent.PascalKompetenz) + '%' + #13#10 +
    'Lerneffekt dank Beziehung, Humor und Menschlichkeit: ' + IntToStr(lerneffekt) + '%';
end;

var
  TomSelig: TDozent;
  abschiedsgruß: string;

begin
  TomSelig.Name := 'Tom Selig';
  TomSelig.BeziehungsIndex := 10;
  TomSelig.HumorLevel := 9;
  TomSelig.PascalKompetenz := 100;
  TomSelig.Menschlichkeit := 10;

  abschiedsgruß := Erstelle_Abschiedsgruß(TomSelig);
  WriteLn(abschiedsgruß);
end.`;

    const output = `Herzliches Dankeschön, Tom Selig!
Beziehungsarbeit: Legendär
Humor-Level: Lachgarantie
Menschlichkeit: Vorbildlich menschlich
PASCAL-Kompetenz: 100%
Lerneffekt dank Beziehung, Humor und Menschlichkeit: 97%`;

    document.getElementById('pascalCode').textContent = pascalCode;
    document.getElementById('output').textContent = output;
});
