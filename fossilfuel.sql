-- ============================================================
-- Belgian Federal Inventory of Fossil Fuel Subsidies (2025)
-- Source: https://mdruszcz.github.io/inventaris/
-- Data covers years 2018–2022, amounts in million EUR
-- ============================================================


-- ============================================================
-- TABLE 1: Rate differences between products (2022, million €)
--          Benchmark 1 (unleaded petrol) vs Benchmark 2
-- ============================================================

CREATE TABLE IF NOT EXISTS tbl1_rate_diff_between_products (
    id                  INTEGER PRIMARY KEY AUTOINCREMENT,
    category            TEXT    NOT NULL,  -- 'Motor fuels' or 'Heating fuels'
    product_fr          TEXT    NOT NULL,
    product_en          TEXT    NOT NULL,
    benchmark_1_meur    REAL,
    benchmark_2_meur    REAL,
    year                INTEGER DEFAULT 2022
);

INSERT INTO tbl1_rate_diff_between_products
    (category, product_fr, product_en, benchmark_1_meur, benchmark_2_meur)
VALUES
-- Motor fuels
('Motor fuels', 'Essence sans plomb',            'Unleaded petrol',          0.0,    0.0),
('Motor fuels', 'Gasoil haute teneur en soufre', 'High sulfur gasoil',       0.1,    0.1),
('Motor fuels', 'Gasoil faible teneur en soufre','Low sulfur gasoil',        382.4,  382.4),
('Motor fuels', 'TOTAL carburants',              'TOTAL motor fuels',        382.5,  382.5),
-- Heating fuels
('Heating fuels','Kérosène (hors aviation)',     'Kerosene (excl. aviation)',0.0,    0.0),
('Heating fuels','Fioul lourd',                 'Heavy fuel oil',           20.1,   4.4),
('Heating fuels','GPL',                         'LPG',                      9.2,    1.8),
('Heating fuels','Gaz naturel professionnel',   'Professional natural gas',  2553.1, 900.5),
('Heating fuels','Gaz naturel non-professionnel','Natural gas: non-professional', 2301.1, 520.3),
('Heating fuels','Houille et coke',             'Coal and coke',            0.7,    0.2),
('Heating fuels','TOTAL combustibles',          'TOTAL heating fuels',      4884.2, 1427.2);


-- ============================================================
-- TABLE 2: Rate differences between uses of the same product
--          (2022, million €) – Benchmark 1 & 2
-- ============================================================

CREATE TABLE IF NOT EXISTS tbl2_rate_diff_between_uses (
    id                  INTEGER PRIMARY KEY AUTOINCREMENT,
    category            TEXT    NOT NULL,  -- 'Motor fuels' or 'Heating fuels'
    use_subcategory     TEXT,              -- 'Professional use' / 'Non-professional use' / NULL
    item_fr             TEXT    NOT NULL,
    item_en             TEXT    NOT NULL,
    benchmark_1_meur    REAL,
    benchmark_2_meur    REAL,
    year                INTEGER DEFAULT 2022
);

INSERT INTO tbl2_rate_diff_between_uses
    (category, use_subcategory, item_fr, item_en, benchmark_1_meur, benchmark_2_meur)
VALUES
-- Motor fuels
('Motor fuels', NULL, 'Remboursement de diesel professionnel', 'Professional diesel reimbursement', 742.4, 742.4),
('Motor fuels', NULL, 'Kérosène utilisé comme carburant',      'Kerosene used as motor fuel',       1.3,   1.3),
('Motor fuels', NULL, 'TOTAL carburants',                      'TOTAL motor fuels',                 743.8, 743.8),
-- Heating fuels – Professional use
('Heating fuels','Professional use','Gasoil - utilisations industrielles et commerciales','Gasoil - industrial and commercial uses', 412.5, 87.3),
('Heating fuels','Professional use','Kérosène utilisé comme combustible','Kerosene used as heating fuel', 36.9, 7.9),
('Heating fuels','Professional use','Gaz naturel au taux réduit','Natural gas at reduced rate', 993.9, 291.2),
-- Heating fuels – Non-professional use
('Heating fuels','Non-professional use','Mazout de chauffage - haute teneur en soufre','Heating oil - high sulfur', 868.1, 205.0),
('Heating fuels','Non-professional use','Mazout de chauffage - faible teneur en soufre','Heating oil - low sulfur', 1856.8, 181.5),
('Heating fuels','Non-professional use','Mazout de chauffage - total','Heating oil - total', 2724.9, 386.5),
('Heating fuels','Non-professional use','GPL utilisé comme combustible','LPG used as heating fuel', 120.3, 25.5),
('Heating fuels','Non-professional use','Houille et coke - exonération pour les ménages','Coal and coke - exemption for households', 16.5, 3.8),
-- Total heating fuels
('Heating fuels', NULL, 'TOTAL combustibles', 'TOTAL heating fuels', 3436.9, 802.2);


-- ============================================================
-- TABLE 3: Detail of fossil fuel subsidies (million €)
--          Benchmark 1 – years 2018 to 2022
-- ============================================================

CREATE TABLE IF NOT EXISTS tbl3_fossil_fuel_subsidies_detail (
    id                  INTEGER PRIMARY KEY AUTOINCREMENT,
    subsidy_type        TEXT    NOT NULL,  -- 'Direct', 'Intl transport', 'Indirect', 'EHS'
    instrument          TEXT    NOT NULL,  -- 'Transfers', 'Income taxes', 'VAT', 'Excise duties', etc.
    sub_instrument      TEXT,
    item_fr             TEXT    NOT NULL,
    item_en             TEXT    NOT NULL,
    year                INTEGER NOT NULL,
    amount_meur         REAL,
    pct_gdp             REAL
);

-- Helper: insert all years for each line item
-- Direct subsidies – Transfers (permanent)
INSERT INTO tbl3_fossil_fuel_subsidies_detail
    (subsidy_type, instrument, sub_instrument, item_fr, item_en, year, amount_meur)
VALUES
('Direct','Transfers','Permanent','Tarif social Gaz naturel','Natural gas social tariff',2018,74.0),
('Direct','Transfers','Permanent','Tarif social Gaz naturel','Natural gas social tariff',2019,89.0),
('Direct','Transfers','Permanent','Tarif social Gaz naturel','Natural gas social tariff',2020,79.0),
('Direct','Transfers','Permanent','Tarif social Gaz naturel','Natural gas social tariff',2021,95.3),
('Direct','Transfers','Permanent','Tarif social Gaz naturel','Natural gas social tariff',2022,428.2),

('Direct','Transfers','Permanent','Tarif social Electricité','Electricity social tariff',2018,33.8),
('Direct','Transfers','Permanent','Tarif social Electricité','Electricity social tariff',2019,36.7),
('Direct','Transfers','Permanent','Tarif social Electricité','Electricity social tariff',2020,35.2),
('Direct','Transfers','Permanent','Tarif social Electricité','Electricity social tariff',2021,28.0),
('Direct','Transfers','Permanent','Tarif social Electricité','Electricity social tariff',2022,241.5),

('Direct','Transfers','Permanent','Fonds CPAS gaz naturel','CPAS energy access support fund - natural gas',2018,22.0),
('Direct','Transfers','Permanent','Fonds CPAS gaz naturel','CPAS energy access support fund - natural gas',2019,25.0),
('Direct','Transfers','Permanent','Fonds CPAS gaz naturel','CPAS energy access support fund - natural gas',2020,25.1),
('Direct','Transfers','Permanent','Fonds CPAS gaz naturel','CPAS energy access support fund - natural gas',2021,25.2),
('Direct','Transfers','Permanent','Fonds CPAS gaz naturel','CPAS energy access support fund - natural gas',2022,24.1),

('Direct','Transfers','Permanent','Fonds CPAS électricité','CPAS energy access support fund - electricity',2018,10.0),
('Direct','Transfers','Permanent','Fonds CPAS électricité','CPAS energy access support fund - electricity',2019,10.9),
('Direct','Transfers','Permanent','Fonds CPAS électricité','CPAS energy access support fund - electricity',2020,11.7),
('Direct','Transfers','Permanent','Fonds CPAS électricité','CPAS energy access support fund - electricity',2021,10.8),
('Direct','Transfers','Permanent','Fonds CPAS électricité','CPAS energy access support fund - electricity',2022,42.0),

('Direct','Transfers','Permanent','Fonds Mazout','Heating oil Fund',2018,16.9),
('Direct','Transfers','Permanent','Fonds Mazout','Heating oil Fund',2019,16.6),
('Direct','Transfers','Permanent','Fonds Mazout','Heating oil Fund',2020,14.6),
('Direct','Transfers','Permanent','Fonds Mazout','Heating oil Fund',2021,13.8),
('Direct','Transfers','Permanent','Fonds Mazout','Heating oil Fund',2022,21.1),

-- Subtotal permanent transfers
('Direct','Transfers','Permanent - TOTAL','Total Transferts permanents','Total Permanent Transfers',2018,156.7),
('Direct','Transfers','Permanent - TOTAL','Total Transferts permanents','Total Permanent Transfers',2019,178.2),
('Direct','Transfers','Permanent - TOTAL','Total Transferts permanents','Total Permanent Transfers',2020,165.6),
('Direct','Transfers','Permanent - TOTAL','Total Transferts permanents','Total Permanent Transfers',2021,173.1),
('Direct','Transfers','Permanent - TOTAL','Total Transferts permanents','Total Permanent Transfers',2022,756.8),

-- Direct subsidies – Transfers (temporary)
('Direct','Transfers','Temporary','Tarif social élargi gaz naturel (BIM)','Extended social tariff - natural gas (BIM)',2018,NULL),
('Direct','Transfers','Temporary','Tarif social élargi gaz naturel (BIM)','Extended social tariff - natural gas (BIM)',2019,NULL),
('Direct','Transfers','Temporary','Tarif social élargi gaz naturel (BIM)','Extended social tariff - natural gas (BIM)',2020,NULL),
('Direct','Transfers','Temporary','Tarif social élargi gaz naturel (BIM)','Extended social tariff - natural gas (BIM)',2021,154.8),
('Direct','Transfers','Temporary','Tarif social élargi gaz naturel (BIM)','Extended social tariff - natural gas (BIM)',2022,717.2),

('Direct','Transfers','Temporary','Tarif social élargi électricité (BIM)','Extended social tariff - electricity (BIM)',2018,NULL),
('Direct','Transfers','Temporary','Tarif social élargi électricité (BIM)','Extended social tariff - electricity (BIM)',2019,NULL),
('Direct','Transfers','Temporary','Tarif social élargi électricité (BIM)','Extended social tariff - electricity (BIM)',2020,NULL),
('Direct','Transfers','Temporary','Tarif social élargi électricité (BIM)','Extended social tariff - electricity (BIM)',2021,38.3),
('Direct','Transfers','Temporary','Tarif social élargi électricité (BIM)','Extended social tariff - electricity (BIM)',2022,458.7),

('Direct','Transfers','Temporary','Prime unique de 80€','One-off €80 premium',2018,NULL),
('Direct','Transfers','Temporary','Prime unique de 80€','One-off €80 premium',2019,NULL),
('Direct','Transfers','Temporary','Prime unique de 80€','One-off €80 premium',2020,NULL),
('Direct','Transfers','Temporary','Prime unique de 80€','One-off €80 premium',2021,22.7),
('Direct','Transfers','Temporary','Prime unique de 80€','One-off €80 premium',2022,0.0),

-- Subtotal temporary transfers
('Direct','Transfers','Temporary - TOTAL','Total Transferts temporaires','Total Temporary Transfers',2018,NULL),
('Direct','Transfers','Temporary - TOTAL','Total Transferts temporaires','Total Temporary Transfers',2019,NULL),
('Direct','Transfers','Temporary - TOTAL','Total Transferts temporaires','Total Temporary Transfers',2020,NULL),
('Direct','Transfers','Temporary - TOTAL','Total Transferts temporaires','Total Temporary Transfers',2021,215.8),
('Direct','Transfers','Temporary - TOTAL','Total Transferts temporaires','Total Temporary Transfers',2022,1175.9),

-- Direct subsidies – Income taxes
('Direct','Income taxes',NULL,'Cartes carburant','Fuel cards',2018,472.4),
('Direct','Income taxes',NULL,'Cartes carburant','Fuel cards',2019,512.8),
('Direct','Income taxes',NULL,'Cartes carburant','Fuel cards',2020,521.9),
('Direct','Income taxes',NULL,'Cartes carburant','Fuel cards',2021,618.9),
('Direct','Income taxes',NULL,'Cartes carburant','Fuel cards',2022,793.9),

('Direct','Income taxes','TOTAL','Total Impôts sur le revenu','Total Income taxes',2018,472.4),
('Direct','Income taxes','TOTAL','Total Impôts sur le revenu','Total Income taxes',2019,512.8),
('Direct','Income taxes','TOTAL','Total Impôts sur le revenu','Total Income taxes',2020,521.9),
('Direct','Income taxes','TOTAL','Total Impôts sur le revenu','Total Income taxes',2021,618.9),
('Direct','Income taxes','TOTAL','Total Impôts sur le revenu','Total Income taxes',2022,793.9),

-- Direct subsidies – VAT
('Direct','VAT',NULL,'Taux réduit sur le charbon','Reduced rate on coal',2018,3.6),
('Direct','VAT',NULL,'Taux réduit sur le charbon','Reduced rate on coal',2019,2.9),
('Direct','VAT',NULL,'Taux réduit sur le charbon','Reduced rate on coal',2020,2.4),
('Direct','VAT',NULL,'Taux réduit sur le charbon','Reduced rate on coal',2021,2.4),
('Direct','VAT',NULL,'Taux réduit sur le charbon','Reduced rate on coal',2022,5.1),

('Direct','VAT','TOTAL','Total TVA','Total VAT',2018,3.6),
('Direct','VAT','TOTAL','Total TVA','Total VAT',2019,2.9),
('Direct','VAT','TOTAL','Total TVA','Total VAT',2020,2.4),
('Direct','VAT','TOTAL','Total TVA','Total VAT',2021,2.4),
('Direct','VAT','TOTAL','Total TVA','Total VAT',2022,5.1),

-- Direct subsidies – Excise duties: rate differences between products
('Direct','Excise duties','Rate diff between products','Gasoil','Gasoil',2018,696.0),
('Direct','Excise duties','Rate diff between products','Gasoil','Gasoil',2019,429.7),
('Direct','Excise duties','Rate diff between products','Gasoil','Gasoil',2020,252.0),
('Direct','Excise duties','Rate diff between products','Gasoil','Gasoil',2021,368.9),
('Direct','Excise duties','Rate diff between products','Gasoil','Gasoil',2022,382.4),

('Direct','Excise duties','Rate diff between products','Kérosène','Kerosene',2018,0.0),
('Direct','Excise duties','Rate diff between products','Kérosène','Kerosene',2019,0.0),
('Direct','Excise duties','Rate diff between products','Kérosène','Kerosene',2020,0.0),
('Direct','Excise duties','Rate diff between products','Kérosène','Kerosene',2021,0.0),
('Direct','Excise duties','Rate diff between products','Kérosène','Kerosene',2022,0.0),

('Direct','Excise duties','Rate diff between products','Fioul lourd','Heavy fuel oil',2018,26.0),
('Direct','Excise duties','Rate diff between products','Fioul lourd','Heavy fuel oil',2019,20.1),
('Direct','Excise duties','Rate diff between products','Fioul lourd','Heavy fuel oil',2020,52.8),
('Direct','Excise duties','Rate diff between products','Fioul lourd','Heavy fuel oil',2021,16.9),
('Direct','Excise duties','Rate diff between products','Fioul lourd','Heavy fuel oil',2022,20.1),

('Direct','Excise duties','Rate diff between products','LPG','LPG',2018,6.7),
('Direct','Excise duties','Rate diff between products','LPG','LPG',2019,5.4),
('Direct','Excise duties','Rate diff between products','LPG','LPG',2020,6.0),
('Direct','Excise duties','Rate diff between products','LPG','LPG',2021,9.7),
('Direct','Excise duties','Rate diff between products','LPG','LPG',2022,9.2),

('Direct','Excise duties','Rate diff between products','Gaz naturel','Natural gas',2018,4848.1),
('Direct','Excise duties','Rate diff between products','Gaz naturel','Natural gas',2019,4741.5),
('Direct','Excise duties','Rate diff between products','Gaz naturel','Natural gas',2020,4538.0),
('Direct','Excise duties','Rate diff between products','Gaz naturel','Natural gas',2021,5124.3),
('Direct','Excise duties','Rate diff between products','Gaz naturel','Natural gas',2022,4854.2),

('Direct','Excise duties','Rate diff between products','Houille et coke','Coal and coke',2018,10.6),
('Direct','Excise duties','Rate diff between products','Houille et coke','Coal and coke',2019,57.4),
('Direct','Excise duties','Rate diff between products','Houille et coke','Coal and coke',2020,0.3),
('Direct','Excise duties','Rate diff between products','Houille et coke','Coal and coke',2021,0.2),
('Direct','Excise duties','Rate diff between products','Houille et coke','Coal and coke',2022,0.7),

('Direct','Excise duties','Rate diff between products - SUBTOTAL','Sous-total écarts de taux','Sub-total rate differences',2018,5587.4),
('Direct','Excise duties','Rate diff between products - SUBTOTAL','Sous-total écarts de taux','Sub-total rate differences',2019,5254.1),
('Direct','Excise duties','Rate diff between products - SUBTOTAL','Sous-total écarts de taux','Sub-total rate differences',2020,4849.2),
('Direct','Excise duties','Rate diff between products - SUBTOTAL','Sous-total écarts de taux','Sub-total rate differences',2021,5520.1),
('Direct','Excise duties','Rate diff between products - SUBTOTAL','Sous-total écarts de taux','Sub-total rate differences',2022,5266.6),

-- Direct subsidies – Excise duties: specific rates for same product
('Direct','Excise duties','Specific rates same product','Mazout de chauffage','Heating oil',2018,2266.0),
('Direct','Excise duties','Specific rates same product','Mazout de chauffage','Heating oil',2019,2263.3),
('Direct','Excise duties','Specific rates same product','Mazout de chauffage','Heating oil',2020,2129.8),
('Direct','Excise duties','Specific rates same product','Mazout de chauffage','Heating oil',2021,2096.5),
('Direct','Excise duties','Specific rates same product','Mazout de chauffage','Heating oil',2022,1856.8),

('Direct','Excise duties','Specific rates same product','Gasoil - utilisations industrielles','Gasoil - industrial and commercial uses',2018,386.3),
('Direct','Excise duties','Specific rates same product','Gasoil - utilisations industrielles','Gasoil - industrial and commercial uses',2019,415.6),
('Direct','Excise duties','Specific rates same product','Gasoil - utilisations industrielles','Gasoil - industrial and commercial uses',2020,383.7),
('Direct','Excise duties','Specific rates same product','Gasoil - industrial and commercial uses',2021,375.0),
('Direct','Excise duties','Specific rates same product','Gasoil - utilisations industrielles','Gasoil - industrial and commercial uses',2022,412.5),

('Direct','Excise duties','Specific rates same product','Remboursement diesel professionnel','Professional diesel reimbursement',2018,668.2),
('Direct','Excise duties','Specific rates same product','Remboursement diesel professionnel','Professional diesel reimbursement',2019,939.3),
('Direct','Excise duties','Specific rates same product','Remboursement diesel professionnel','Professional diesel reimbursement',2020,1220.5),
('Direct','Excise duties','Specific rates same product','Remboursement diesel professionnel','Professional diesel reimbursement',2021,905.5),
('Direct','Excise duties','Specific rates same product','Remboursement diesel professionnel','Professional diesel reimbursement',2022,742.4),

('Direct','Excise duties','Specific rates same product','Kérosène utilisé comme combustible','Kerosene used as heating fuel',2018,37.0),
('Direct','Excise duties','Specific rates same product','Kérosène utilisé comme combustible','Kerosene used as heating fuel',2019,34.9),
('Direct','Excise duties','Specific rates same product','Kérosène utilisé comme combustible','Kerosene used as heating fuel',2020,32.5),
('Direct','Excise duties','Specific rates same product','Kérosène utilisé comme combustible','Kerosene used as heating fuel',2021,41.5),
('Direct','Excise duties','Specific rates same product','Kérosène utilisé comme combustible','Kerosene used as heating fuel',2022,36.9),

('Direct','Excise duties','Specific rates same product','Kérosène utilisé comme carburant','Kerosene used as motor fuel',2018,4.6),
('Direct','Excise duties','Specific rates same product','Kérosène utilisé comme carburant','Kerosene used as motor fuel',2019,3.4),
('Direct','Excise duties','Specific rates same product','Kérosène utilisé comme carburant','Kerosene used as motor fuel',2020,2.3),
('Direct','Excise duties','Specific rates same product','Kérosène utilisé comme carburant','Kerosene used as motor fuel',2021,2.4),
('Direct','Excise duties','Specific rates same product','Kérosène utilisé comme carburant','Kerosene used as motor fuel',2022,1.3),

('Direct','Excise duties','Specific rates same product','LPG utilisé comme combustible','LPG used as heating fuel',2018,120.3),
('Direct','Excise duties','Specific rates same product','LPG utilisé comme combustible','LPG used as heating fuel',2019,108.6),
('Direct','Excise duties','Specific rates same product','LPG utilisé comme combustible','LPG used as heating fuel',2020,138.8),
('Direct','Excise duties','Specific rates same product','LPG utilisé comme combustible','LPG used as heating fuel',2021,140.0),
('Direct','Excise duties','Specific rates same product','LPG utilisé comme combustible','LPG used as heating fuel',2022,120.3),

('Direct','Excise duties','Specific rates same product','Gaz naturel au taux réduit','Natural gas at reduced rate',2018,1250.2),
('Direct','Excise duties','Specific rates same product','Gaz naturel au taux réduit','Natural gas at reduced rate',2019,1091.0),
('Direct','Excise duties','Specific rates same product','Gaz naturel au taux réduit','Natural gas at reduced rate',2020,1031.1),
('Direct','Excise duties','Specific rates same product','Gaz naturel au taux réduit','Natural gas at reduced rate',2021,1190.6),
('Direct','Excise duties','Specific rates same product','Gaz naturel au taux réduit','Natural gas at reduced rate',2022,1295.2),

('Direct','Excise duties','Specific rates same product','Houille et coke - exonération ménages','Coal and coke - exemption for households',2018,50.6),
('Direct','Excise duties','Specific rates same product','Houille et coke - exonération ménages','Coal and coke - exemption for households',2019,27.8),
('Direct','Excise duties','Specific rates same product','Houille et coke - exonération ménages','Coal and coke - exemption for households',2020,20.8),
('Direct','Excise duties','Specific rates same product','Houille et coke - exonération ménages','Coal and coke - exemption for households',2021,22.1),
('Direct','Excise duties','Specific rates same product','Houille et coke - exonération ménages','Coal and coke - exemption for households',2022,16.5),

('Direct','Excise duties','Specific rates same product - SUBTOTAL','Sous-total taux particuliers','Sub-total specific rates',2018,4783.2),
('Direct','Excise duties','Specific rates same product - SUBTOTAL','Sous-total taux particuliers','Sub-total specific rates',2019,5093.0),
('Direct','Excise duties','Specific rates same product - SUBTOTAL','Sous-total taux particuliers','Sub-total specific rates',2020,4750.4),
('Direct','Excise duties','Specific rates same product - SUBTOTAL','Sous-total taux particuliers','Sub-total specific rates',2021,4773.7),
('Direct','Excise duties','Specific rates same product - SUBTOTAL','Sous-total taux particuliers','Sub-total specific rates',2022,4482.0),

-- Direct subsidies – Excise duties: subsidies on intermediate consumption
('Direct','Excise duties','Intermediate consumption','Fabrication/entretien aéronefs et navires','Manufacture/testing/maintenance aircraft & ships',2018,28.8),
('Direct','Excise duties','Intermediate consumption','Fabrication/entretien aéronefs et navires','Manufacture/testing/maintenance aircraft & ships',2019,36.9),
('Direct','Excise duties','Intermediate consumption','Fabrication/entretien aéronefs et navires','Manufacture/testing/maintenance aircraft & ships',2020,10.0),
('Direct','Excise duties','Intermediate consumption','Fabrication/entretien aéronefs et navires','Manufacture/testing/maintenance aircraft & ships',2021,7.5),
('Direct','Excise duties','Intermediate consumption','Fabrication/entretien aéronefs et navires','Manufacture/testing/maintenance aircraft & ships',2022,9.0),

('Direct','Excise duties','Intermediate consumption','Transport ferroviaire','Rail transport',2018,23.0),
('Direct','Excise duties','Intermediate consumption','Transport ferroviaire','Rail transport',2019,15.6),
('Direct','Excise duties','Intermediate consumption','Transport ferroviaire','Rail transport',2020,17.7),
('Direct','Excise duties','Intermediate consumption','Transport ferroviaire','Rail transport',2021,16.0),
('Direct','Excise duties','Intermediate consumption','Transport ferroviaire','Rail transport',2022,15.7),

('Direct','Excise duties','Intermediate consumption','Navigation intérieure','Inland navigation',2018,93.1),
('Direct','Excise duties','Intermediate consumption','Navigation intérieure','Inland navigation',2019,84.3),
('Direct','Excise duties','Intermediate consumption','Navigation intérieure','Inland navigation',2020,86.6),
('Direct','Excise duties','Intermediate consumption','Navigation intérieure','Inland navigation',2021,86.1),
('Direct','Excise duties','Intermediate consumption','Navigation intérieure','Inland navigation',2022,90.7),

('Direct','Excise duties','Intermediate consumption','Activités de dragage','Dredging activities',2018,70.3),
('Direct','Excise duties','Intermediate consumption','Activités de dragage','Dredging activities',2019,75.0),
('Direct','Excise duties','Intermediate consumption','Activités de dragage','Dredging activities',2020,51.5),
('Direct','Excise duties','Intermediate consumption','Activités de dragage','Dredging activities',2021,45.9),
('Direct','Excise duties','Intermediate consumption','Activités de dragage','Dredging activities',2022,51.6),

('Direct','Excise duties','Intermediate consumption','Agriculture/horticulture/pisciculture/sylviculture','Agricultural and horticultural work, fish farming and forestry',2018,459.9),
('Direct','Excise duties','Intermediate consumption','Agriculture/horticulture/pisciculture/sylviculture','Agricultural and horticultural work, fish farming and forestry',2019,566.3),
('Direct','Excise duties','Intermediate consumption','Agriculture/horticulture/pisciculture/sylviculture','Agricultural and horticultural work, fish farming and forestry',2020,557.6),
('Direct','Excise duties','Intermediate consumption','Agriculture/horticulture/pisciculture/sylviculture','Agricultural and horticultural work, fish farming and forestry',2021,569.8),
('Direct','Excise duties','Intermediate consumption','Agriculture/horticulture/pisciculture/sylviculture','Agricultural and horticultural work, fish farming and forestry',2022,620.5),

('Direct','Excise duties','Intermediate consumption - SUBTOTAL','Sous-total conso. intermédiaire','Sub-total intermediate consumption',2018,675.1),
('Direct','Excise duties','Intermediate consumption - SUBTOTAL','Sous-total conso. intermédiaire','Sub-total intermediate consumption',2019,782.4),
('Direct','Excise duties','Intermediate consumption - SUBTOTAL','Sous-total conso. intermédiaire','Sub-total intermediate consumption',2020,719.1),
('Direct','Excise duties','Intermediate consumption - SUBTOTAL','Sous-total conso. intermédiaire','Sub-total intermediate consumption',2021,725.3),
('Direct','Excise duties','Intermediate consumption - SUBTOTAL','Sous-total conso. intermédiaire','Sub-total intermediate consumption',2022,787.4),

-- Total excise duties
('Direct','Excise duties','TOTAL','Total Accises','Total Excise duties',2018,11045.7),
('Direct','Excise duties','TOTAL','Total Accises','Total Excise duties',2019,10786.9),
('Direct','Excise duties','TOTAL','Total Accises','Total Excise duties',2020,10661.3),
('Direct','Excise duties','TOTAL','Total Accises','Total Excise duties',2021,11019.0),
('Direct','Excise duties','TOTAL','Total Accises','Total Excise duties',2022,10536.0),

-- GRAND TOTAL direct subsidies
('Direct','ALL INSTRUMENTS','GRAND TOTAL','TOTAL DES SUBVENTIONS DIRECTES','TOTAL DIRECT SUBSIDIES',2018,11678.4),
('Direct','ALL INSTRUMENTS','GRAND TOTAL','TOTAL DES SUBVENTIONS DIRECTES','TOTAL DIRECT SUBSIDIES',2019,11351.2),
('Direct','ALL INSTRUMENTS','GRAND TOTAL','TOTAL DES SUBVENTIONS DIRECTES','TOTAL DIRECT SUBSIDIES',2020,11480.9),
('Direct','ALL INSTRUMENTS','GRAND TOTAL','TOTAL DES SUBVENTIONS DIRECTES','TOTAL DIRECT SUBSIDIES',2021,12029.2),
('Direct','ALL INSTRUMENTS','GRAND TOTAL','TOTAL DES SUBVENTIONS DIRECTES','TOTAL DIRECT SUBSIDIES',2022,13267.8),

-- GDP % for direct subsidies
('Direct','ALL INSTRUMENTS','% GDP','% PIB','% of GDP',2018,NULL),
('Direct','ALL INSTRUMENTS','% GDP','% PIB','% of GDP',2019,NULL),
('Direct','ALL INSTRUMENTS','% GDP','% PIB','% of GDP',2020,NULL),
('Direct','ALL INSTRUMENTS','% GDP','% PIB','% of GDP',2021,NULL),
('Direct','ALL INSTRUMENTS','% GDP','% PIB','% of GDP',2022,NULL);

-- Update % GDP for direct subsidies
UPDATE tbl3_fossil_fuel_subsidies_detail
SET pct_gdp = CASE year
    WHEN 2018 THEN 2.5
    WHEN 2019 THEN 2.4
    WHEN 2020 THEN 2.5
    WHEN 2021 THEN 2.4
    WHEN 2022 THEN 2.4
    END
WHERE sub_instrument = 'GRAND TOTAL' AND subsidy_type = 'Direct';

-- International air & maritime transport subsidies
INSERT INTO tbl3_fossil_fuel_subsidies_detail
    (subsidy_type, instrument, sub_instrument, item_fr, item_en, year, amount_meur, pct_gdp)
VALUES
('Intl transport','Excise duties',NULL,'Exemption accises kérosène - aviation','Excise exemption kerosene - aviation',2018,673.0,NULL),
('Intl transport','Excise duties',NULL,'Exemption accises kérosène - aviation','Excise exemption kerosene - aviation',2019,677.0,NULL),
('Intl transport','Excise duties',NULL,'Exemption accises kérosène - aviation','Excise exemption kerosene - aviation',2020,471.8,NULL),
('Intl transport','Excise duties',NULL,'Exemption accises kérosène - aviation','Excise exemption kerosene - aviation',2021,594.2,NULL),
('Intl transport','Excise duties',NULL,'Exemption accises kérosène - aviation','Excise exemption kerosene - aviation',2022,687.7,NULL),

('Intl transport','Excise duties',NULL,'Exemption accises fioul lourd - transport maritime','Excise exemption heavy fuel oil - maritime transport',2018,304.3,NULL),
('Intl transport','Excise duties',NULL,'Exemption accises fioul lourd - transport maritime','Excise exemption heavy fuel oil - maritime transport',2019,188.1,NULL),
('Intl transport','Excise duties',NULL,'Exemption accises fioul lourd - transport maritime','Excise exemption heavy fuel oil - maritime transport',2020,268.1,NULL),
('Intl transport','Excise duties',NULL,'Exemption accises fioul lourd - transport maritime','Excise exemption heavy fuel oil - maritime transport',2021,241.9,NULL),
('Intl transport','Excise duties',NULL,'Exemption accises fioul lourd - transport maritime','Excise exemption heavy fuel oil - maritime transport',2022,232.8,NULL),

('Intl transport','Excise duties',NULL,'Exemption accises diesel - transport maritime','Excise exemption diesel - maritime transport',2018,49.8,NULL),
('Intl transport','Excise duties',NULL,'Exemption accises diesel - transport maritime','Excise exemption diesel - maritime transport',2019,52.1,NULL),
('Intl transport','Excise duties',NULL,'Exemption accises diesel - transport maritime','Excise exemption diesel - maritime transport',2020,44.6,NULL),
('Intl transport','Excise duties',NULL,'Exemption accises diesel - transport maritime','Excise exemption diesel - maritime transport',2021,57.6,NULL),
('Intl transport','Excise duties',NULL,'Exemption accises diesel - transport maritime','Excise exemption diesel - maritime transport',2022,55.2,NULL),

('Intl transport','Excise duties','TOTAL','Total transport aérien et maritime intl.','Total international air and maritime transport',2018,1027.0,0.2),
('Intl transport','Excise duties','TOTAL','Total transport aérien et maritime intl.','Total international air and maritime transport',2019,989.6,0.2),
('Intl transport','Excise duties','TOTAL','Total transport aérien et maritime intl.','Total international air and maritime transport',2020,712.0,0.2),
('Intl transport','Excise duties','TOTAL','Total transport aérien et maritime intl.','Total international air and maritime transport',2021,893.7,0.2),
('Intl transport','Excise duties','TOTAL','Total transport aérien et maritime intl.','Total international air and maritime transport',2022,975.7,0.2),

-- Indirect subsidies
('Indirect','VAT',NULL,'TVA - exonération billets d''avion','VAT - exemption on plane tickets',2018,222.2,0.05),
('Indirect','VAT',NULL,'TVA - exonération billets d''avion','VAT - exemption on plane tickets',2019,228.3,0.05),
('Indirect','VAT',NULL,'TVA - exonération billets d''avion','VAT - exemption on plane tickets',2020,61.9,0.01),
('Indirect','VAT',NULL,'TVA - exonération billets d''avion','VAT - exemption on plane tickets',2021,86.8,0.02),
('Indirect','VAT',NULL,'TVA - exonération billets d''avion','VAT - exemption on plane tickets',2022,180.2,0.03),

('Indirect','VAT','TOTAL','Total des subventions indirectes','Total indirect subsidies',2018,222.2,0.05),
('Indirect','VAT','TOTAL','Total des subventions indirectes','Total indirect subsidies',2019,228.3,0.05),
('Indirect','VAT','TOTAL','Total des subventions indirectes','Total indirect subsidies',2020,61.9,0.01),
('Indirect','VAT','TOTAL','Total des subventions indirectes','Total indirect subsidies',2021,86.8,0.02),
('Indirect','VAT','TOTAL','Total des subventions indirectes','Total indirect subsidies',2022,180.2,0.03),

-- Environmentally Harmful Subsidies (EHS)
('EHS','Income taxes / company cars',NULL,'Voitures de sociétés','Company cars',2018,2627.2,0.5),
('EHS','Income taxes / company cars',NULL,'Voitures de sociétés','Company cars',2019,2780.3,0.6),
('EHS','Income taxes / company cars',NULL,'Voitures de sociétés','Company cars',2020,3226.3,0.6),
('EHS','Income taxes / company cars',NULL,'Voitures de sociétés','Company cars',2021,3307.5,0.6),
('EHS','Income taxes / company cars',NULL,'Voitures de sociétés','Company cars',2022,3434.2,0.6),

('EHS','Income taxes / company cars','TOTAL','Total des subventions EHS','Total EHS subsidies',2018,2627.2,0.5),
('EHS','Income taxes / company cars','TOTAL','Total des subventions EHS','Total EHS subsidies',2019,2780.3,0.6),
('EHS','Income taxes / company cars','TOTAL','Total des subventions EHS','Total EHS subsidies',2020,3226.3,0.6),
('EHS','Income taxes / company cars','TOTAL','Total des subventions EHS','Total EHS subsidies',2021,3307.5,0.6),
('EHS','Income taxes / company cars','TOTAL','Total des subventions EHS','Total EHS subsidies',2022,3434.2,0.6);


-- ============================================================
-- TABLE 4: Main subsidy items by sector (2022) – Benchmark 1
-- ============================================================

CREATE TABLE IF NOT EXISTS tbl4_subsidies_by_sector_2022 (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    sector_fr       TEXT    NOT NULL,
    sector_en       TEXT    NOT NULL,
    subsidy_type    TEXT    NOT NULL,  -- 'Direct', 'Intl transport', 'Indirect', 'EHS'
    item_fr         TEXT    NOT NULL,
    item_en         TEXT    NOT NULL,
    amount_meur     REAL,
    pct_subtotal    REAL,
    year            INTEGER DEFAULT 2022
);

INSERT INTO tbl4_subsidies_by_sector_2022
    (sector_fr, sector_en, subsidy_type, item_fr, item_en, amount_meur, pct_subtotal)
VALUES
-- Transport – Direct subsidies
('Transport','Transport','Direct','Cartes carburant','Fuel cards',793.9,37.9),
('Transport','Transport','Direct','Ecart de taux de base entre produits','Base rate difference between products',401.4,19.1),
('Transport','Transport','Direct','Remboursements de diesel professionnel','Professional diesel reimbursements',742.4,35.4),
('Transport','Transport','Direct','Exonération navigation intérieure','Inland navigation exemption',90.7,4.3),
('Transport','Transport','Direct','Exonération dragage','Dredging exemption',51.6,2.5),
('Transport','Transport','Direct','Autres','Others',17.0,0.8),
('Transport','Transport','Direct','Sous-total subventions directes','Sub-total direct subsidies',2097.0,100.0),
-- Transport – Intl transport
('Transport','Transport','Intl transport','Exonération accises kérosène aviation','Aviation kerosene excise exemption',687.7,70.5),
('Transport','Transport','Intl transport','Exonération accises navigation maritime','Maritime navigation excise exemption',288.0,29.5),
('Transport','Transport','Intl transport','Sous-total transport aérien et maritime intl.','Sub-total intl air and maritime transport',975.7,100.0),
-- Transport – Indirect
('Transport','Transport','Indirect','TVA - Exonération des billets d''avion','VAT - Exemption on plane tickets',180.2,100.0),
('Transport','Transport','Indirect','Sous-total subventions indirectes','Sub-total indirect subsidies',180.2,100.0),
-- Transport – EHS
('Transport','Transport','EHS','Voitures de sociétés','Company cars',3434.2,100.0),
('Transport','Transport','EHS','Sous-total subventions EHS','Sub-total EHS subsidies',3434.2,100.0),
-- Transport TOTAL
('Transport','Transport','ALL','Total Transport','Total Transport',6687.0,NULL),

-- Industry – Direct subsidies
('Industrie','Industry','Direct','Ecart de taux de base entre produits','Base rate difference between products',2052.5,52.3),
('Industrie','Industry','Direct','Taux réduit gasoil','Reduced rate gasoil',412.5,10.5),
('Industrie','Industry','Direct','Taux réduit gaz naturel','Reduced rate natural gas',1295.2,33.0),
('Industrie','Industry','Direct','Autres','Others',166.2,4.2),
('Industrie','Industry','Direct','Total Industrie','Total Industry',3926.4,100.0),

-- Buildings – Direct subsidies (permanent)
('Bâtiments','Buildings','Direct','Transferts aux particuliers (tarifs sociaux e.a.)','Transfers to individuals (social tariffs etc.)',756.8,15.4),
('Bâtiments','Buildings','Direct','Ecart de taux de base entre produits','Base rate difference between products',2524.6,51.4),
('Bâtiments','Buildings','Direct','Exonération mazout de chauffage','Heating oil exemption',1609.8,32.8),
('Bâtiments','Buildings','Direct','Autres','Others',21.7,0.4),
('Bâtiments','Buildings','Direct','Total Bâtiments','Total Buildings',4912.9,100.0),
-- Buildings – temporary measures
('Bâtiments','Buildings','Direct (temporary)','Tarif social élargi - gaz naturel (BIM)','Extended social tariff - natural gas (BIM)',717.2,61.0),
('Bâtiments','Buildings','Direct (temporary)','Tarif social élargi - électricité (BIM)','Extended social tariff - electricity (BIM)',458.7,39.0),
('Bâtiments','Buildings','Direct (temporary)','Total Bâtiments - mesures temporaires','Total Buildings - temporary measures',1175.9,100.0),

-- Agriculture – Direct subsidies
('Agriculture et autres','Agriculture and other activities','Direct','Ecart de taux de base entre produits','Base rate difference between products',268.0,23.6),
('Agriculture et autres','Agriculture and other activities','Direct','Exonération pour tracteurs agricoles et forestiers','Exemption for agricultural, horticultural and forestry tractors',247.0,21.8),
('Agriculture et autres','Agriculture and other activities','Direct','Exonérations sur consommation intermédiaire','Exemptions on intermediate consumption',620.5,54.6),
('Agriculture et autres','Agriculture and other activities','Direct','Total Agriculture et autres activités','Total Agriculture and other activities',1135.5,100.0),

-- Grand total direct subsidies (all sectors)
('Tous secteurs','All sectors','Direct','Total des subventions directes','Total direct subsidies',13247.7,NULL);


-- ============================================================
-- USEFUL VIEWS
-- ============================================================

-- View: annual totals by subsidy type
CREATE VIEW IF NOT EXISTS v_annual_totals AS
SELECT
    year,
    subsidy_type,
    SUM(amount_meur) AS total_meur
FROM tbl3_fossil_fuel_subsidies_detail
WHERE sub_instrument = 'GRAND TOTAL'
   OR (sub_instrument = 'TOTAL' AND item_en IN (
       'Total international air and maritime transport',
       'Total indirect subsidies',
       'Total EHS subsidies'
   ))
GROUP BY year, subsidy_type
ORDER BY year, subsidy_type;

-- View: direct subsidies trend by instrument (2018-2022)
CREATE VIEW IF NOT EXISTS v_direct_by_instrument AS
SELECT
    year,
    instrument,
    SUM(amount_meur) AS total_meur
FROM tbl3_fossil_fuel_subsidies_detail
WHERE subsidy_type = 'Direct'
  AND sub_instrument = 'TOTAL'
GROUP BY year, instrument
ORDER BY year, instrument;

-- View: 2022 sector breakdown
CREATE VIEW IF NOT EXISTS v_2022_by_sector AS
SELECT
    sector_en,
    subsidy_type,
    item_en,
    amount_meur,
    pct_subtotal
FROM tbl4_subsidies_by_sector_2022
ORDER BY sector_en, subsidy_type, amount_meur DESC;
