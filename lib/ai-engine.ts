// AI Engine for Trial Transport Platform
// Simulates advanced AI capabilities for route optimization, driver matching, and predictions

import { Shipment, Driver, AIMatchingResult, RouteOptimization, Location } from './types';

export class AIEngine {
  // AI-powered driver matching algorithm
  static matchDriverToShipment(shipment: Shipment, availableDrivers: Driver[]): AIMatchingResult[] {
    const results: AIMatchingResult[] = [];

    for (const driver of availableDrivers) {
      if (driver.availability !== 'available') continue;

      // Calculate match score based on multiple factors
      let matchScore = 0;
      const reasons: string[] = [];

      // 1. Proximity score (40% weight)
      const distance = this.calculateDistance(
        driver.currentLocation || { lat: 40.7128, lng: -74.0060 },
        { lat: shipment.pickup.lat, lng: shipment.pickup.lng }
      );
      const proximityScore = Math.max(0, 100 - (distance / 50)); // Max 50 miles for full score
      matchScore += proximityScore * 0.4;
      reasons.push(`${distance.toFixed(1)} miles from pickup`);

      // 2. Certification match (25% weight)
      const requiredCerts = this.getRequiredCertifications(shipment);
      const certMatch = requiredCerts.every(cert => 
        driver.certifications.some(dc => dc.toLowerCase().includes(cert.toLowerCase()))
      );
      if (certMatch) {
        matchScore += 25;
        reasons.push('All certifications matched');
      }

      // 3. Vehicle compatibility (20% weight)
      const vehicleMatch = this.checkVehicleCompatibility(shipment, driver);
      if (vehicleMatch) {
        matchScore += 20;
        reasons.push('Vehicle type compatible');
      }

      // 4. Performance history (15% weight)
      const performanceScore = (driver.rating / 5) * 15;
      matchScore += performanceScore;
      reasons.push(`${driver.rating.toFixed(1)}★ rating`);

      // Calculate estimated arrival
      const estimatedMinutes = Math.round((distance / 30) * 60); // Assume 30 mph average
      const estimatedArrival = new Date(Date.now() + estimatedMinutes * 60000).toISOString();

      results.push({
        driverId: driver.id,
        driverName: driver.name,
        matchScore: Math.round(matchScore),
        estimatedArrival,
        distance,
        reasons,
        certificationMatch: certMatch,
        vehicleMatch,
        performanceScore: driver.rating,
      });
    }

    // Sort by match score descending
    return results.sort((a, b) => b.matchScore - a.matchScore);
  }

  // AI-powered route optimization
  static optimizeRoute(pickup: Location, dropoff: Location, specimens: any[]): RouteOptimization {
    const distance = this.calculateDistance(
      { lat: pickup.lat, lng: pickup.lng },
      { lat: dropoff.lat, lng: dropoff.lng }
    );

    // Simulate AI analysis of traffic, weather, and optimal path
    const baseTime = (distance / 35) * 60; // Base time at 35 mph
    const trafficMultiplier = this.getTrafficMultiplier();
    const duration = Math.round(baseTime * trafficMultiplier);

    const estimatedArrival = new Date(Date.now() + duration * 60000).toISOString();

    // Generate waypoints for the route
    const waypoints = this.generateWaypoints(pickup, dropoff);

    return {
      distance: Math.round(distance * 10) / 10,
      duration,
      estimatedArrival,
      waypoints,
      trafficConditions: this.getTrafficCondition(trafficMultiplier),
      weatherConditions: this.getWeatherCondition(),
      alternativeRoutes: Math.floor(Math.random() * 3) + 1,
      aiConfidence: Math.round(85 + Math.random() * 10), // 85-95% confidence
    };
  }

  // Predictive delivery time estimation
  static predictDeliveryTime(shipment: Shipment): { estimated: string; confidence: number; factors: string[] } {
    const factors: string[] = [];
    let adjustmentMinutes = 0;

    // Factor in specimen type
    if (shipment.specimens.some(s => s.temperatureRequirement === 'cryogenic')) {
      adjustmentMinutes += 10;
      factors.push('Cryogenic handling requires extra care');
    }

    // Factor in priority
    if (shipment.priority === 'critical') {
      adjustmentMinutes -= 15;
      factors.push('Critical priority - expedited handling');
    }

    // Factor in time of day
    const hour = new Date().getHours();
    if (hour >= 7 && hour <= 9 || hour >= 16 && hour <= 18) {
      adjustmentMinutes += 20;
      factors.push('Rush hour traffic expected');
    }

    // Factor in distance
    const distance = this.calculateDistance(
      { lat: shipment.pickup.lat, lng: shipment.pickup.lng },
      { lat: shipment.dropoff.lat, lng: shipment.dropoff.lng }
    );

    const baseMinutes = (distance / 35) * 60;
    const totalMinutes = Math.round(baseMinutes + adjustmentMinutes);
    const estimated = new Date(Date.now() + totalMinutes * 60000).toISOString();

    return {
      estimated,
      confidence: Math.round(80 + Math.random() * 15),
      factors,
    };
  }

  // Demand forecasting
  static forecastDemand(historicalData?: any[]): { 
    nextHour: number; 
    nextDay: number; 
    peakTimes: string[];
    trend: 'increasing' | 'stable' | 'decreasing';
  } {
    // Simulate AI-based demand forecasting
    const hour = new Date().getHours();
    const dayOfWeek = new Date().getDay();

    let nextHour = 5 + Math.floor(Math.random() * 10);
    let nextDay = 50 + Math.floor(Math.random() * 50);

    // Adjust for time patterns
    if (hour >= 8 && hour <= 17) {
      nextHour += 5; // Business hours
    }
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      nextDay += 20; // Weekdays
    }

    return {
      nextHour,
      nextDay,
      peakTimes: ['9:00 AM - 11:00 AM', '2:00 PM - 4:00 PM'],
      trend: Math.random() > 0.5 ? 'increasing' : 'stable',
    };
  }

  // Compliance risk assessment
  static assessComplianceRisk(shipment: Shipment): {
    riskLevel: 'low' | 'medium' | 'high';
    score: number;
    concerns: string[];
    recommendations: string[];
  } {
    const concerns: string[] = [];
    const recommendations: string[] = [];
    let riskScore = 0;

    // Check temperature requirements
    if (shipment.specimens.some(s => s.temperatureRequirement === 'cryogenic')) {
      riskScore += 30;
      concerns.push('Cryogenic specimens require specialized handling');
      recommendations.push('Ensure driver has cryogenic certification');
    }

    // Check distance
    const distance = this.calculateDistance(
      { lat: shipment.pickup.lat, lng: shipment.pickup.lng },
      { lat: shipment.dropoff.lat, lng: shipment.dropoff.lng }
    );
    if (distance > 100) {
      riskScore += 20;
      concerns.push('Long distance transport increases risk');
      recommendations.push('Consider intermediate temperature checks');
    }

    // Check priority
    if (shipment.priority === 'critical') {
      riskScore += 15;
      concerns.push('Critical priority requires extra attention');
      recommendations.push('Assign highest-rated driver');
    }

    let riskLevel: 'low' | 'medium' | 'high' = 'low';
    if (riskScore > 50) riskLevel = 'high';
    else if (riskScore > 25) riskLevel = 'medium';

    return {
      riskLevel,
      score: riskScore,
      concerns,
      recommendations,
    };
  }

  // Helper functions
  private static calculateDistance(point1: { lat: number; lng: number }, point2: { lat: number; lng: number }): number {
    const R = 3959; // Earth's radius in miles
    const dLat = this.toRad(point2.lat - point1.lat);
    const dLon = this.toRad(point2.lng - point1.lng);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRad(point1.lat)) *
        Math.cos(this.toRad(point2.lat)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  private static toRad(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  private static getRequiredCertifications(shipment: Shipment): string[] {
    const certs: string[] = [];
    if (shipment.specimens.some(s => s.hazardClass)) {
      certs.push('Hazmat');
    }
    if (shipment.specimens.some(s => s.temperatureRequirement !== 'ambient')) {
      certs.push('Temperature Control');
    }
    return certs;
  }

  private static checkVehicleCompatibility(shipment: Shipment, driver: Driver): boolean {
    const needsRefrigeration = shipment.specimens.some(
      s => s.temperatureRequirement === 'refrigerated' || s.temperatureRequirement === 'frozen'
    );
    return !needsRefrigeration || driver.vehicleInfo.temperatureControlled;
  }

  private static getTrafficMultiplier(): number {
    const hour = new Date().getHours();
    if (hour >= 7 && hour <= 9 || hour >= 16 && hour <= 18) {
      return 1.3 + Math.random() * 0.2; // Rush hour
    }
    return 1.0 + Math.random() * 0.1;
  }

  private static getTrafficCondition(multiplier: number): 'light' | 'moderate' | 'heavy' {
    if (multiplier > 1.3) return 'heavy';
    if (multiplier > 1.15) return 'moderate';
    return 'light';
  }

  private static getWeatherCondition(): string {
    const conditions = ['Clear', 'Partly Cloudy', 'Cloudy', 'Light Rain', 'Overcast'];
    return conditions[Math.floor(Math.random() * conditions.length)];
  }

  private static generateWaypoints(pickup: Location, dropoff: Location): { lat: number; lng: number }[] {
    const waypoints: { lat: number; lng: number }[] = [];
    const steps = 5;
    
    for (let i = 0; i <= steps; i++) {
      const ratio = i / steps;
      waypoints.push({
        lat: pickup.lat + (dropoff.lat - pickup.lat) * ratio,
        lng: pickup.lng + (dropoff.lng - pickup.lng) * ratio,
      });
    }
    
    return waypoints;
  }
}