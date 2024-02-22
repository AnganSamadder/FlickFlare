plugins {
	java
	id("org.springframework.boot") version "3.3.0-M1"
	id("io.spring.dependency-management") version "1.1.4"
}

group = "com.ASCP"
version = "0.0.1-SNAPSHOT"

java {
	sourceCompatibility = JavaVersion.VERSION_21
}

repositories {
	mavenCentral()
	maven { url = uri("https://repo.spring.io/milestone") }
}

configurations {
	all {
		exclude(group = "commons-logging", module = "commons-logging")
	}
}

dependencies {
	implementation("com.google.firebase:firebase-admin:9.2.0")
//	implementation("com.google.firebase:firebase-database")
	implementation("org.springframework.boot:spring-boot-starter")
	implementation("org.springframework.boot:spring-boot-starter-web")
	implementation("org.springframework.boot:spring-boot-starter-data-jpa")
	implementation("org.projectlombok:lombok:1.18.28")
	implementation("org.projectlombok:lombok:1.18.28")
	runtimeOnly("mysql:mysql-connector-java:8.0.33")
	compileOnly("org.projectlombok:lombok")
	annotationProcessor("org.projectlombok:lombok")
	testImplementation("org.springframework.boot:spring-boot-starter-test")
	developmentOnly("org.springframework.boot:spring-boot-devtools")
}

tasks.withType<Test> {
	useJUnitPlatform()
}
